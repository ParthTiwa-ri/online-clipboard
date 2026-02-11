import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    // Fetch clipboard content from database
    const result = await sql`
        SELECT content FROM clipboards WHERE slug = ${slug}
    `;

    const content = result.length > 0 ? result[0].content : "";
    return NextResponse.json({ content });
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const { content } = await request.json();

    // Insert or update clipboard content in database
    await sql`
        INSERT INTO clipboards (slug, content, updated_at) 
        VALUES (${slug}, ${content}, CURRENT_TIMESTAMP)
        ON CONFLICT (slug) 
        DO UPDATE SET content = ${content}, updated_at = CURRENT_TIMESTAMP
    `;

    return NextResponse.json({ success: true });
}
