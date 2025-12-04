import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { EventItem } from "../types";

export default function EventsPage({ campus }: { campus?: string }) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEvents();
  }, [campus]);

  const loadEvents = async () => {
    setLoading(true);
    let query = supabase.from("events").select("*").order("start_date", { ascending: true });
    if (campus) query = query.eq("campus", campus);
    const { data, error } = await query;
    if (error) console.error("Error loading events:", error);
    setEvents(data ?? []);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Events {campus ? `— ${campus}` : ""}</h2>
      {loading && <div>Loading…</div>}
      {!loading && events.length === 0 && <div>No events yet.</div>}
      <div className="grid gap-4">
        {events.map((ev) => (
          <div key={ev.id} className="p-4 rounded border">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-lg">{ev.title}</div>
                <div className="text-sm text-gray-600">{ev.location}</div>
              </div>
              <div className="text-sm text-gray-500">
                {ev.start_date ? new Date(ev.start_date).toLocaleString() : ""}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
