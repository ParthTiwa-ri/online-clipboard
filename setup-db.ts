import { neon } from "@neondatabase/serverless";

async function setupDatabase() {
  const sql = neon(process.env.DATABASE_URL!);
  
  console.log("Creating clipboards table...");
  
  await sql`
    CREATE TABLE IF NOT EXISTS clipboards (
      slug TEXT PRIMARY KEY,
      content TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  await sql`
    CREATE INDEX IF NOT EXISTS idx_updated_at ON clipboards(updated_at)
  `;
  
  console.log("Database setup complete!");
}

setupDatabase().catch(console.error);
