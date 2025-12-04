// src/pages/EventsPage.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type EventItem = {
  id: string;
  title: string;
  description?: string | null;
  campus?: string | null;
  location?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  image_url?: string | null;
  image_path?: string | null;
};

export default function EventsPage({ campus }: { campus?: string }) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campus]);

  const loadEvents = async () => {
    setLoading(true);
    let query = supabase
      .from("events")
      .select("*")
      .order("start_date", { ascending: true });

    if (campus) query = query.eq("campus", campus);

    const { data, error } = await query;
    if (error) console.error("Error loading events:", error);
    setEvents((data ?? []) as EventItem[]);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-6">
        Events {campus ? `— ${campus}` : ""}
      </h2>

      {loading && <div className="text-gray-600">Loading…</div>}
      {!loading && events.length === 0 && (
        <div className="text-gray-600">No events yet.</div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {events.map((ev) => (
          <article
            key={ev.id}
            className="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden bg-gray-100">
              <img
                src={
                  ev.image_url ||
                  // fallback placeholder
                  "https://images.unsplash.com/photo-1503424886305-5dfb2f99a9b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                }
                alt={ev.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // fallback if image fails
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1503424886305-5dfb2f99a9b0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder";
                }}
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{ev.title}</h3>
                  <div className="text-sm text-gray-500">{ev.campus}</div>
                </div>
                <div className="text-xs text-gray-500">
                  {ev.start_date ? new Date(ev.start_date).toLocaleString() : ""}
                </div>
              </div>

              <p className="mt-3 text-gray-700 flex-1">{ev.description}</p>

              <div className="mt-4 text-sm text-gray-500">
                {ev.location && <span className="mr-2">📍 {ev.location}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
