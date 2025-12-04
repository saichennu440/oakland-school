// admin-events/index.ts
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ADMIN_KEY = Deno.env.get("ADMIN_KEY")!; // your admin access key (secret)

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const pathname = url.pathname; // e.g., /, /:id
    const method = req.method.toUpperCase();

    // Validate admin key for mutating endpoints (POST/PUT/DELETE)
    const providedKey = req.headers.get("x-admin-key");
    const needsAuth = method === "POST" || method === "PUT" || method === "DELETE";
    if (needsAuth) {
      if (!providedKey || providedKey !== ADMIN_KEY) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
      }
    }

    // Routing:
    // GET / -> list events (optionally accepts ?campus=playschool)
    // POST / -> create event (body = event)
    // PUT /:id -> update event
    // DELETE /:id -> delete event

    if (method === "GET") {
      const campus = url.searchParams.get("campus");
      let query = supabaseAdmin.from("events").select("*").order("start_date", { ascending: true });
      if (campus) query = query.eq("campus", campus);
      const { data, error } = await query;
      if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" }});
      return new Response(JSON.stringify({ data }), { status: 200, headers: { "Content-Type": "application/json" }});
    }

    if (method === "POST") {
      const body = await req.json();
      const { data, error } = await supabaseAdmin.from("events").insert([body]).select().single();
      if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" }});
      return new Response(JSON.stringify({ data }), { status: 201, headers: { "Content-Type": "application/json" }});
    }

    if (method === "PUT") {
      // path: /:id
      const id = pathname.split("/").filter(Boolean)[1] || pathname.split("/").filter(Boolean)[0]; // robust-get id
      if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400, headers: { "Content-Type": "application/json" }});
      const body = await req.json();
      const { data, error } = await supabaseAdmin.from("events").update(body).eq("id", id).select().single();
      if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" }});
      return new Response(JSON.stringify({ data }), { status: 200, headers: { "Content-Type": "application/json" }});
    }

    if (method === "DELETE") {
      const id = pathname.split("/").filter(Boolean)[1] || pathname.split("/").filter(Boolean)[0];
      if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400, headers: { "Content-Type": "application/json" }});
      const { error } = await supabaseAdmin.from("events").delete().eq("id", id);
      if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" }});
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json" }});
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" }});

  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500, headers: { "Content-Type": "application/json" }});
  }
});
