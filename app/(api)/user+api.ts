import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function POST(request: Request) {
  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await sql`
        INSERT INTO users (
            name,
            email,
            clerkId
        )
        VALUES (
            ${name},
            ${email},
            ${clerkId}
        )
    `;

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
    });
  } catch (err) {
    console.error("Error creating user:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
