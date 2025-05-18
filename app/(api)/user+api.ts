import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);

export async function POST(request: Request) {
    try {
        
    } catch (err) {
        console.error("Error creating user:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}