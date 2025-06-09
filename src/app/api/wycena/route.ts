export async function POST(req: Request) {
  console.log(">>> ODEBRANO POST /api/wycena <<<");

  try {
    const body = await req.json();
    console.log("Dane z formularza:", body);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Błąd parsowania JSON:", err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
