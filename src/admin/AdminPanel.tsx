import React, { useEffect, useState } from "react";
import { EventItem } from "../types";

const API_BASE = import.meta.env.VITE_ADMIN_EVENTS_FN!;
const LOCAL_KEY = "oakland_admin_key"; // storage key (not the secret)

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

  // Load events after login
  useEffect(() => {
    if (authorized) fetchEvents();
  }, [authorized]);

  /** Save admin key locally (like a password login) */
  const saveKey = () => {
    if (!adminKeyInput.trim()) return alert("Please enter admin key");
    localStorage.setItem(LOCAL_KEY, adminKeyInput.trim());
    setAuthorized(true);
  };

  /** Logout */
  const logout = () => {
    localStorage.removeItem(LOCAL_KEY);
    setAdminKeyInput("");
    setAuthorized(false);
  };

  /** Fetch all events */
  const fetchEvents = async () => {
    setLoading(true);

    const res = await fetch(API_BASE, {
      headers: {
  "x-admin-key": localStorage.getItem(LOCAL_KEY) || "",
}

    });

    const json = await res.json();
    if (!res.ok) {
      alert("Error fetching events: " + (json.error || res.statusText));
    } else {
      setEvents(json.data ?? []);
    }

    setLoading(false);
  };

  /** Create or Update event */
  const createOrUpdate = async (payload: Partial<EventItem>) => {
    const isUpdate = !!payload.id;

    const url = isUpdate ? `${API_BASE}/${payload.id}` : API_BASE;

    const res = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": localStorage.getItem(LOCAL_KEY) || ""

      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      return alert(`Error ${isUpdate ? "updating" : "creating"}: ` + json.error);
    }

    if (isUpdate) {
      setEvents((items) =>
        items.map((ev) => (ev.id === json.data.id ? json.data : ev))
      );
    } else {
      setEvents((items) => [json.data, ...items]);
    }

    setEditing(null);
  };

  /** Delete event */
  const remove = async (id: string) => {
    if (!confirm("Delete this event?")) return;

    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
      headers: {
        "x-admin-key": localStorage.getItem(LOCAL_KEY) || ""
      },
    });

    const json = await res.json();
    if (!res.ok) return alert("Error deleting: " + json.error);

    setEvents((items) => items.filter((ev) => ev.id !== id));
  };

  /** LOGIN SCREEN */
  if (!authorized) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 border rounded">
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

  /** ADMIN PAGE */
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events Admin Panel</h2>

        <div className="flex gap-3">
          <button
            onClick={() =>
              setEditing({
                id: "",
                title: "",
                campus: "regular",
                description: "",
                location: "",
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

      {/* Event List */}
      <div className="space-y-4">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="p-4 border rounded flex justify-between items-start"
          >
            <div>
              <div className="font-semibold">
                {ev.title}{" "}
                <span className="text-sm text-gray-500">({ev.campus})</span>
              </div>

              <div className="text-sm text-gray-600">
                {ev.location} •{" "}
                {ev.start_date
                  ? new Date(ev.start_date).toLocaleString()
                  : ""}
              </div>

              <div className="mt-2 text-gray-700">{ev.description}</div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setEditing(ev)}
                className="px-3 py-1 bg-yellow-400 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => remove(ev.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {editing && (
        <EventEditor
          event={editing}
          onCancel={() => setEditing(null)}
          onSave={(payload) => createOrUpdate(payload)}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------
   Event Editor Component
------------------------------------------------------- */
function EventEditor({
  event,
  onCancel,
  onSave,
}: {
  event: Partial<EventItem>;
  onCancel: () => void;
  onSave: (p: Partial<EventItem>) => void;
}) {
  const [form, setForm] = useState<Partial<EventItem>>(event);

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="font-bold mb-3">
        {form.id ? "Edit Event" : "New Event"}
      </h3>

      <div className="grid gap-3">
        <input
          value={form.title || ""}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
          className="p-2 border rounded"
        />

        <textarea
          value={form.description || ""}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
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

        <div className="flex gap-3">
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>

          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
