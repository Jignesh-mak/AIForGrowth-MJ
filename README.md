# AIForGrowth

> AI-Driven Growth at Scale — A platform showcasing intelligent AI agents designed to automate tasks, boost productivity, and simplify your workflow.

---

## 🛠 Tech Stack

### Language
- **TypeScript** — Strongly typed JavaScript for safer, more maintainable code

### Framework & Build Tool
- **React 18** — Component-based UI framework
- **Vite** — Fast dev server and build tool with HMR support

### Styling
- **Tailwind CSS v4** — Utility-first CSS framework (via `@tailwindcss/vite` plugin)

### Animation
- **Framer Motion** (`motion/react`) — Declarative animations, scroll-linked effects, `useScroll`, `useSpring`, `useTransform`, `AnimatePresence`

### Icons
- **Lucide React** — Clean, consistent icon library

### Environment
- **dotenv / Vite loadEnv** — Environment variable management for API keys

---

## 📁 Project Structure

```
AIForGrowthV2/
├── src/
│   ├── App.tsx        # Main app — Navbar, Hero, Ecosystem, Footer, LoadingScreen
│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles & Tailwind directives
├── .env               # Environment variables (not committed)
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies & scripts
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root with:

```env
GEMINI_API_KEY=your_api_key_here
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

Deployed on **Vercel**. Every push to `main` triggers an automatic redeployment.

Set `GEMINI_API_KEY` in Vercel → Project Settings → Environment Variables.

---

## 👤 Author

Made with ❤️ by **MJ**  
© 2026 AIForGrowth Labs Inc. All rights reserved.