-- Create table for storing clipboard content
CREATE TABLE IF NOT EXISTS clipboards (
  slug TEXT PRIMARY KEY,
  content TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_updated_at ON clipboards(updated_at);
