// src/pages/AdminPanel.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type EventItem = {
  id?: string;
  title?: string;
  description?: string | null;
  campus?: string | null;
  location?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  image_url?: string | null;   // public url
  image_path?: string | null;  // storage path
  // internal editor-only props:
  _file?: File | null;
  _removeImage?: boolean | null;
};

const API_BASE = import.meta.env.VITE_ADMIN_EVENTS_FN!;
const LOCAL_KEY = "oakland_admin_key";
const BUCKET = "events"; // make sure this bucket exists in Supabase Storage

export default function AdminPanel() {
  const [adminKeyInput, setAdminKeyInput] = useState<string>(
    localStorage.getItem(LOCAL_KEY) || ""
  );

  const [authorized, setAuthorized] = useState<boolean>(
    !!localStorage.getItem(LOCAL_KEY)
  );

  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (authorized) fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized]);

  const saveKey = () => {
    if (!adminKeyInput.trim()) return alert("Please enter admin key");
    localStorage.setItem(LOCAL_KEY, adminKeyInput.trim());
    setAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_KEY);
    setAdminKeyInput("");
    setAuthorized(false);
  };

  const fetchEvents = async () => {
    setLoading(true);

    const res = await fetch(API_BASE, {
      headers: {
        "x-admin-key": localStorage.getItem(LOCAL_KEY) || "",
      },
    });

    const json = await res.json();
    if (!res.ok) {
      alert("Error fetching events: " + (json.error || res.statusText));
    } else {
      setEvents(json.data ?? []);
    }

    setLoading(false);
  };

  /** upload file to storage, return { path, publicUrl } */
  const uploadFileToStorage = async (file: File) => {
    const timestamp = Date.now();
    const safeName = file.name.replace(/\s+/g, "_");
    const path = `events/${timestamp}_${safeName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      throw uploadError;
    }

    // get public url (works for public buckets)
    const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(path);
    // urlData.publicUrl or urlData.publicURL depending on version
    const publicUrl = (urlData as any)?.publicUrl || (urlData as any)?.publicURL || "";
    return { path: (uploadData as any).path || path, publicUrl };
  };

  const createOrUpdate = async (payload: Partial<EventItem>) => {
    setSaving(true);
    try {
      // 1) handle file upload if file selected
      if (payload._file instanceof File) {
        try {
          const { path, publicUrl } = await uploadFileToStorage(payload._file);
          payload.image_path = path;
          payload.image_url = publicUrl;
        } catch (err: any) {
          console.error("Upload error:", err);
          alert("Image upload failed: " + (err.message || err));
          setSaving(false);
          return;
        }
      }

      // 2) handle remove image flag
      if (payload._removeImage) {
        payload.image_path = null;
        payload.image_url = null;
      }

      // don't send _file or _removeImage to backend
      delete payload._file;
      delete payload._removeImage;

      const isUpdate = Boolean(payload.id && String(payload.id).trim() !== "");
      const url = isUpdate ? `${API_BASE}/${payload.id}` : API_BASE;

      const res = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": localStorage.getItem(LOCAL_KEY) || "",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        alert(`Error ${isUpdate ? "updating" : "creating"}: ` + json.error);
        setSaving(false);
        return;
      }

      if (isUpdate) {
        setEvents((items) =>
          items.map((ev) => (ev.id === json.data.id ? json.data : ev))
        );
      } else {
        setEvents((items) => [json.data, ...items]);
      }

      setEditing(null);
    } catch (err) {
      console.error(err);
      alert("Unexpected error: " + (err as any).message);
    } finally {
      setSaving(false);
    }
  };

  /** Delete event (and attempt to remove stored image) */
  const remove = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    const ev = events.find((e) => e.id === id);

    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
      headers: {
        "x-admin-key": localStorage.getItem(LOCAL_KEY) || "",
      },
    });

    const json = await res.json();
    if (!res.ok) return alert("Error deleting: " + json.error);

    // try remove image from storage (best-effort)
    if (ev?.image_path) {
      try {
        await supabase.storage.from(BUCKET).remove([ev.image_path]);
      } catch (err) {
        console.warn("Failed to remove image from storage:", err);
      }
    }

    setEvents((items) => items.filter((ev) => ev.id !== id));
  };

  if (!authorized) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 border rounded bg-white">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          value={adminKeyInput}
          onChange={(e) => setAdminKeyInput(e.target.value)}
          placeholder="Enter admin access key"
          className="w-full p-3 border rounded mb-4"
        />

        <button
          onClick={saveKey}
          className="px-4 py-2 bg-blue-600 text-white rounded w-full"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events Admin Panel</h2>

        <div className="flex gap-3">
          <button
            onClick={() =>
              setEditing({
                title: "",
                campus: "regular",
                description: "",
                location: "",
                image_url: null,
                image_path: null,
              } as any)
            }
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Event
          </button>

          <button
            onClick={logout}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {loading && <div>Loading…</div>}

      <div className="grid gap-4">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="p-4 border rounded flex gap-4 items-start bg-white"
          >
            <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded">
              <img
                src={
                  ev.image_url ||
                  "https://images.unsplash.com/photo-1503424886305-5dfb2f99a9b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                }
                alt={ev.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{ev.title}</div>
                  <div className="text-sm text-gray-500">{ev.campus}</div>
                </div>

                <div className="text-sm text-gray-500">
                  {ev.start_date ? new Date(ev.start_date).toLocaleString() : ""}
                </div>
              </div>

              <div className="text-sm text-gray-700 mt-2">{ev.description}</div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setEditing(ev)}
                  className="px-3 py-1 bg-yellow-400 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => remove(ev.id!)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor */}
      {editing && (
        <EventEditor
          event={editing}
          onCancel={() => setEditing(null)}
          onSave={(payload) => createOrUpdate(payload)}
          saving={saving}
        />
      )}
    </div>
  );
}

/* EventEditor component */
function EventEditor({
  event,
  onCancel,
  onSave,
  saving,
}: {
  event: Partial<EventItem>;
  onCancel: () => void;
  onSave: (p: Partial<EventItem>) => void;
  saving?: boolean;
}) {
  const [form, setForm] = useState<Partial<EventItem>>(event || {});
  const [localPreview, setLocalPreview] = useState<string | null>(
    event?.image_url || null
  );

  useEffect(() => {
    setForm(event || {});
    setLocalPreview(event?.image_url || null);
  }, [event]);

  const onFileChange = (f?: File | null) => {
    if (!f) {
      setForm((s) => ({ ...s, _file: null }));
      setLocalPreview(null);
      return;
    }
    setForm((s) => ({ ...s, _file: f, _removeImage: false }));
    const url = URL.createObjectURL(f);
    setLocalPreview(url);
  };

  const handleRemoveImage = () => {
    // mark for removal
    setForm((s) => ({ ...s, _file: null, _removeImage: true, image_path: null, image_url: null }));
    setLocalPreview(null);
  };

  const handleSave = () => {
    // form validation (basic)
    if (!form.title || !form.title.trim()) return alert("Please enter a title");
    // send form as-is (createOrUpdate will upload file if present)
    onSave(form);
  };

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="font-bold mb-3">{form.id ? "Edit Event" : "New Event"}</h3>

      <div className="grid gap-3">
        <input
          value={form.title || ""}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="p-2 border rounded"
        />

        <textarea
          value={form.description || ""}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
          className="p-2 border rounded"
        />

        <input
          value={form.location || ""}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder="Location"
          className="p-2 border rounded"
        />

        <select
          value={form.campus || "regular"}
          onChange={(e) => setForm({ ...form, campus: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="regular">Regular (City)</option>
          <option value="playschool">Playschool</option>
        </select>

        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="datetime-local"
            value={
              form.start_date
                ? new Date(form.start_date).toISOString().slice(0, 16)
                : ""
            }
            onChange={(e) =>
              setForm({
                ...form,
                start_date: e.target.value
                  ? new Date(e.target.value).toISOString()
                  : undefined,
              })
            }
            className="p-2 border rounded"
          />

          <input
            type="datetime-local"
            value={
              form.end_date
                ? new Date(form.end_date).toISOString().slice(0, 16)
                : ""
            }
            onChange={(e) =>
              setForm({
                ...form,
                end_date: e.target.value
                  ? new Date(e.target.value).toISOString()
                  : undefined,
              })
            }
            className="p-2 border rounded"
          />
        </div>

        {/* Image preview + file input */}
        <div className="grid md:grid-cols-2 gap-3 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Image
            </label>

            {localPreview ? (
              <div className="flex items-center gap-3">
                <img
                  src={localPreview}
                  alt="preview"
                  className="w-32 h-20 object-cover rounded border"
                />
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onFileChange(e.target.files?.[0] || undefined)}
                  />
                  <button
                    className="text-sm text-red-600"
                    onClick={handleRemoveImage}
                    type="button"
                  >
                    Remove image
                  </button>
                </div>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onFileChange(e.target.files?.[0] || undefined)}
                />
                <div className="text-xs text-gray-500 mt-1">Optional — recommended size 1200×700</div>
              </>
            )}
          </div>

          <div className="text-sm text-gray-600">
            Uploaded images are stored in the Supabase Storage bucket <strong>{BUCKET}</strong>.
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={saving}
          >
            {saving ? "Saving…" : "Save"}
          </button>

          <button onClick={onCancel} className="px-4 py-2 bg-gray-400 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
