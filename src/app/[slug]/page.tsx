"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ClipboardRoom() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch clipboard content
  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      const res = await fetch(`/api/${slug}`);
      const data = await res.json();
      setContent(data.content || "");
      setLoading(false);
    }
    fetchContent();
    // Poll every 2s for updates
    const interval = setInterval(fetchContent, 2000);
    return () => clearInterval(interval);
  }, [slug]);

  // Save clipboard content
  async function saveContent(newContent: string) {
    setSaving(true);
    setContent(newContent);
    await fetch(`/api/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent }),
    });
    setSaving(false);
  }

  return (
    <main className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
        <h1 className="text-lg font-semibold text-gray-700">/{slug}</h1>
        {saving && <div className="text-sm text-blue-600">Saving...</div>}
      </div>
      {loading ? (
        <div className="flex items-center justify-center flex-1">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : (
        <textarea
          className="flex-1 w-full p-4 text-base resize-none focus:outline-none bg-white"
          value={content}
          onChange={e => saveContent(e.target.value)}
          placeholder="Type or paste text here..."
          autoFocus
        />
      )}
    </main>
  );
}
