// index.ts (Supabase Edge Function - admin-events)
// Paste this into your functions/admin-events/index.ts (or equivalent)

import { serve } from "std/server"; // works in Supabase functions
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.32.0";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ADMIN_KEY = Deno.env.get("ADMIN_KEY")!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars");
  // we still serve; errors will be returned at runtime
}

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// Small helper to return JSON with CORS allowed (useful for browser calls)
function jsonResponse(obj: any, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Consider restricting in production
      "Access-Control-Allow-Headers": "Content-Type, x-admin-key",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
}

serve(async (req) => {
  try {
    // handle CORS preflight
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, x-admin-key",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      });
    }

    const url = new URL(req.url);
    const pathname = url.pathname.replace(/^\/+/, ""); // trim leading slash(es)
    const parts = pathname ? pathname.split("/") : [];
    const idFromPath = parts.length > 0 ? parts[0] : null;
    const method = req.method.toUpperCase();

    // Auth header required for mutating requests
    const providedKey = req.headers.get("x-admin-key") ?? "";

    const needsAuth = method === "POST" || method === "PUT" || method === "DELETE";
    if (needsAuth) {
      if (!ADMIN_KEY) {
        return jsonResponse({ error: "Server missing ADMIN_KEY env" }, 500);
      }
      if (!providedKey || providedKey !== ADMIN_KEY) {
        return jsonResponse({ error: "Unauthorized" }, 401);
      }
    }

    // GET / => list (optional ?campus=playschool)
    if (method === "GET") {
      const campus = url.searchParams.get("campus");
      let query = supabaseAdmin.from("events").select("*").order("start_date", { ascending: true });
      if (campus) query = query.eq("campus", campus);
      const { data, error } = await query;
      if (error) return jsonResponse({ error: error.message }, 500);
      return jsonResponse({ data }, 200);
    }

    // POST / => create
    if (method === "POST") {
      const body = await req.json();
      // basic validation
      if (!body?.title || !body?.campus) {
        return jsonResponse({ error: "Missing required fields: title, campus" }, 400);
      }
      const { data, error } = await supabaseAdmin.from("events").insert([body]).select().single();
      if (error) return jsonResponse({ error: error.message }, 500);
      return jsonResponse({ data }, 201);
    }

    // PUT /:id => update
    if (method === "PUT") {
      const id = idFromPath;
      if (!id) return jsonResponse({ error: "Missing id in path" }, 400);
      const body = await req.json();
      const { data, error } = await supabaseAdmin.from("events").update(body).eq("id", id).select().single();
      if (error) return jsonResponse({ error: error.message }, 500);
      return jsonResponse({ data }, 200);
    }

    // DELETE /:id
    if (method === "DELETE") {
      const id = idFromPath;
      if (!id) return jsonResponse({ error: "Missing id in path" }, 400);
      const { error } = await supabaseAdmin.from("events").delete().eq("id", id);
      if (error) return jsonResponse({ error: error.message }, 500);
      return jsonResponse({ success: true }, 200);
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  } catch (err: any) {
    console.error("Function error:", err);
    return jsonResponse({ error: err?.message ?? String(err) }, 500);
  }
});
