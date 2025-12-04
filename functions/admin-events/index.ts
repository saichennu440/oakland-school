// index.ts — FINAL FIXED VERSION
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.32.0";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ADMIN_KEY = Deno.env.get("ADMIN_KEY")!;

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// --- Shared CORS Headers ---
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-admin-key",
};

// JSON helper
function jsonResponse(obj: any, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

serve(async (req) => {
  try {
    // ----- CORS preflight -----
    if (req.method === "OPTIONS") {
      return new Response("ok", { status: 204, headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, x-admin-key",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    } });
    }

    const url = new URL(req.url);

    // Path parsing
    const parts = url.pathname.split("/").filter(Boolean);
    const id = parts.length > 3 ? parts[parts.length - 1] : null;

    // /functions/v1/bright-endpoint → ["functions","v1","bright-endpoint"]
    // /functions/v1/bright-endpoint/123 → ["functions","v1","bright-endpoint","123"]

    

    const method = req.method.toUpperCase();

    // ----- AUTH -----
    const bearer = req.headers.get("authorization");
    const headerKey = req.headers.get("x-admin-key");

    const extractedBearer =
      bearer?.startsWith("Bearer ") ? bearer.slice(7) : null;

    const key = extractedBearer || headerKey;

    const requiresAuth = ["POST", "PUT", "DELETE"].includes(method);

    if (requiresAuth) {
      if (!key || key !== ADMIN_KEY) {
        return jsonResponse({ error: "Unauthorized" }, 401);
      }
    }

    // ----- GET (list) -----
    if (method === "GET") {
      const campus = url.searchParams.get("campus");

      let query = supabaseAdmin
        .from("events")
        .select("*")
        .order("start_date", { ascending: true });

      if (campus) query = query.eq("campus", campus);

      const { data, error } = await query;
      if (error) return jsonResponse({ error: error.message }, 500);

      return jsonResponse({ data });
    }

    // ----- POST (create) -----
    if (method === "POST") {
      const body = await req.json();

      if (!body?.title || !body?.campus) {
        return jsonResponse({ error: "Missing title or campus" }, 400);
      }

      const { data, error } = await supabaseAdmin
        .from("events")
        .insert([body])
        .select()
        .single();

      if (error) return jsonResponse({ error: error.message }, 500);

      return jsonResponse({ data }, 201);
    }

    // ----- PUT (update) -----
    if (method === "PUT") {
      if (!id) return jsonResponse({ error: "Missing id" }, 400);

      const body = await req.json();

      const { data, error } = await supabaseAdmin
        .from("events")
        .update(body)
        .eq("id", id)
        .select()
        .single();

      if (error) return jsonResponse({ error: error.message }, 500);

      return jsonResponse({ data });
    }

    // ----- DELETE -----
    if (method === "DELETE") {
      if (!id) return jsonResponse({ error: "Missing id" }, 400);

      const { error } = await supabaseAdmin
        .from("events")
        .delete()
        .eq("id", id);

      if (error) return jsonResponse({ error: error.message }, 500);

      return jsonResponse({ success: true });
    }

    return jsonResponse({ error: "Method not allowed" }, 405);
  } catch (err) {
    console.error("Function error:", err);
    return jsonResponse({ error: err?.message ?? "Unknown error" }, 500);
  }
});
