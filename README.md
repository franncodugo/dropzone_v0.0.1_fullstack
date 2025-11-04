## 🧩 Tech Stack

| Layer | Technology | Reason / Benefits |
|--------|-------------|-------------------|
| **Frontend** | **Next.js 15 (App Router)** + **React 19** + **TypeScript** | SSR, excellent performance, and ultra-simple deployment on **Vercel** or **Azure Static Web Apps**. |
| **UI / Styling** | **TailwindCSS** + **shadcn/ui** + **Framer Motion** | Modern, fluid aesthetics and easy to iterate on. |
| **Video** | **YouTube IFrame API** + custom hooks (`useYouTubePlayer`) | Full control over video playback and precise timestamp handling. |
| **Auth & Database** | **Supabase** or **Firebase** (for simplicity) | Google login, integrated database, and optional storage for clips. |
| **Optional Backend** | **.NET 8 Minimal API** | Perfect for exposing custom endpoints and future business logic. |
