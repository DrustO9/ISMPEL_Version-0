# PSMICS Lab Website (v0)

Public-facing website for the **Physics of Soft matter, Interfaces & Complex Systems (PSMICS)** lab
at IIT Kharagpur — Dr. Joydip Chaudhuri's group.

Research areas: cellular biophysics, droplet microfluidics, microfluidic sensors.

> This is the **v0** scaffold built on Google AI Studio. A second iteration lives in `Project_WEB`.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- `@google/genai` (Gemini SDK)
- Express (small server-side endpoints)
- Framer Motion, `lucide-react`, `react-markdown`

## Run locally

```bash
npm install
cp .env.example .env.local       # add your GEMINI_API_KEY
npm run dev
```

## Project layout

```
.
├── index.html
├── src/                  React app
├── sml-assets/           Soft-matter lab images, figures, PDFs
├── metadata.json         AI Studio app metadata
├── package.json
└── vite.config.ts
```
