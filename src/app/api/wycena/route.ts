export async function POST(req: Request) {
  const body = await req.json();
  console.log("BODY:", body);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
