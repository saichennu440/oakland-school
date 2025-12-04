import React, { useEffect, useState } from "react";
import { EventItem } from "../types";

const API_BASE = import.meta.env.REACT_APP_ADMIN_EVENTS_FN!;
const LOCAL_KEY = import.meta.env.VITE_ADMIN_KEY!;

export default function AdminPanel() {
  const [adminKey, setAdminKey] = useState<string>(() => localStorage.getItem(LOCAL_KEY) || "");
  const [authorized, setAuthorized] = useState<boolean>(!!localStorage.getItem(LOCAL_KEY));
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);

  useEffect(() => {
    if (authorized) fetchEvents();
  }, [authorized]);

  const saveKey = () => {
    localStorage.setItem(LOCAL_KEY, adminKey);
    setAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_KEY);
    setAdminKey("");
    setAuthorized(false);
  };

  const fetchEvents = async () => {
    setLoading(true);
    const url = `${API_BASE}`;
    const res = await fetch(url);
    const json = await res.json();
    if (res.ok) setEvents(json.data ?? []);
    else alert("Error fetching events: " + (json?.error || res.statusText));
    setLoading(false);
  };

  const createOrUpdate = async (payload: Partial<EventItem>) => {
    // create
    const headers = { "Content-Type": "application/json", "x-admin-key": localStorage.getItem(LOCAL_KEY) || "" };
    if (!payload.id) {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) return alert("Error creating: " + json?.error);
      setEvents((s) => [json.data, ...s]);
    } else {
      // update
      const res = await fetch(`${API_BASE}/${payload.id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) return alert("Error updating: " + json?.error);
      setEvents((s) => s.map((ev) => (ev.id === json.data.id ? json.data : ev)));
    }
    setEditing(null);
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": localStorage.getItem(LOCAL_KEY) || "" },
    });
    const json = await res.json();
    if (!res.ok) return alert("Error deleting: " + json?.error);
    setEvents((s) => s.filter((ev) => ev.id !== id));
  };

  if (!authorized) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 border rounded">
        <h2 className="text-xl font-bold mb-4">Admin Login (Access Key)</h2>
        <input value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Enter access key" className="w-full p-3 border rounded mb-3" />
        <div className="flex gap-3">
          <button onClick={saveKey} className="px-4 py-2 bg-blue-600 text-white rounded">Enter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events Admin</h2>
        <div>
          <button onClick={() => setEditing({ id: '', title: '', campus: 'regular' } as any)} className="mr-3 px-4 py-2 bg-green-600 text-white rounded">Add Event</button>
          <button onClick={logout} className="px-4 py-2 bg-gray-600 text-white rounded">Logout</button>
        </div>
      </div>

      {loading && <div>Loading…</div>}
      <div className="space-y-4">
        {events.map((ev) => (
          <div key={ev.id} className="p-4 border rounded flex justify-between items-start">
            <div>
              <div className="font-semibold">{ev.title} <span className="text-sm text-gray-500">({ev.campus})</span></div>
              <div className="text-sm text-gray-600">{ev.location} • {ev.start_date ? new Date(ev.start_date).toLocaleString() : ""}</div>
              <div className="mt-2 text-gray-700">{ev.description}</div>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => setEditing(ev)} className="px-3 py-1 bg-yellow-400 rounded">Edit</button>
              <button onClick={() => remove(ev.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

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

/* --- small editor component --- */
function EventEditor({ event, onCancel, onSave }: { event: Partial<EventItem> | null, onCancel:()=>void, onSave:(p:Partial<EventItem>)=>void }) {
  const [form, setForm] = useState<Partial<EventItem>>(event || {});
  useEffect(()=> setForm(event||{}), [event]);

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="font-bold mb-3">{form?.id ? "Edit Event" : "New Event"}</h3>
      <div className="grid gap-3">
        <input value={form.title||""} onChange={(e)=> setForm({...form, title: e.target.value})} placeholder="Title" className="p-2 border rounded" />
        <textarea value={form.description||""} onChange={(e)=> setForm({...form, description: e.target.value})} placeholder="Description" className="p-2 border rounded" />
        <input value={form.location||""} onChange={(e)=> setForm({...form, location: e.target.value})} placeholder="Location" className="p-2 border rounded" />
        <select value={form.campus||"regular"} onChange={(e)=> setForm({...form, campus: e.target.value})} className="p-2 border rounded">
          <option value="regular">Regular (City)</option>
          <option value="playschool">Playschool</option>
        </select>
        <div className="grid md:grid-cols-2 gap-3">
          <input type="datetime-local" value={form.start_date ? new Date(form.start_date).toISOString().slice(0,16) : ""} onChange={(e)=> setForm({...form, start_date: e.target.value ? new Date(e.target.value).toISOString() : undefined})} className="p-2 border rounded" />
          <input type="datetime-local" value={form.end_date ? new Date(form.end_date).toISOString().slice(0,16) : ""} onChange={(e)=> setForm({...form, end_date: e.target.value ? new Date(e.target.value).toISOString() : undefined})} className="p-2 border rounded" />
        </div>

        <div className="flex gap-3">
          <button onClick={()=> onSave(form)} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <button onClick={onCancel} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
}
