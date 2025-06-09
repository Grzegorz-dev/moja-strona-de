export async function POST(req) {
  const body = await req.json();
  console.log("Dane z formularza:", body);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


