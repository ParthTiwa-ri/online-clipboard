
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Online Clipboard</h1>
        <p className="mb-6 text-gray-600">Share text instantly between devices</p>
        <form
          className="flex flex-col gap-3"
          onSubmit={e => {
            e.preventDefault();
            const slug = (e.currentTarget.elements.namedItem("room") as HTMLInputElement).value.trim();
            if (slug) window.location.href = `/${slug}`;
          }}
        >
          <input
            name="room"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter room name (e.g., work, family)"
            autoFocus
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-colors" type="submit">
            Create or Join Room
          </button>
        </form>
        <div className="mt-6 text-gray-500 text-sm text-center">
          Share the room URL to sync clipboard across devices
        </div>
      </div>
    </main>
  );
}
