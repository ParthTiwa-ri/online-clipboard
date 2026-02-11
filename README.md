# Online Clipboard

A simple online clipboard app built with Next.js (App Router) for sharing text between devices in real time. Each room (URL) is a separate clipboard. Deployable to Vercel.

## Features
- Share and edit text instantly between devices
- Unique clipboard per room (URL slug)
- Modern, responsive UI with Tailwind CSS
- Ready for Vercel deployment (frontend & backend in one)

## Usage
1. Go to the homepage and enter a room name (e.g. `work`, `family`, `abc123`).
2. Share the URL with another device to sync clipboard content.
3. Type or paste text in the textarea. Changes are saved and synced automatically.

## Development
```bash
npm install
npm run dev
```

## Production/Deploy
```bash
npm run build
npm start
```

Deploy to Vercel for best results.

## Notes
- This demo uses in-memory storage for clipboard content. For production, use a database or a real-time backend (e.g. Pusher, Ably, Upstash Redis, etc.).
- Vercel serverless does not support WebSockets natively; polling is used for real-time updates.
