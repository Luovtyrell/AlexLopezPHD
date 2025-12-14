# 🐸 Àlex López, Ph.D. — Academic Portfolio

<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/DaisyUI%205-5A0EF8?logo=daisyui&logoColor=fff&style=flat" alt="DaisyUI Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat" alt="React Router Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=fff&style=flat" alt="Vercel Badge" style="height: 23px;">

A modern, elegant single-page application (SPA) showcasing the academic career of **Àlex López, Ph.D.** — an interdisciplinary ecologist and data scientist working at the intersection of biodiversity, data analysis, statistical modelling, and machine learning.

🔗 **Live Demo:** [alex-lopez-phd.vercel.app](https://alex-lopez-phd.vercel.app/)

---

## ✨ Features & UX/UI Highlights

### 🎨 Visual Design

- **Custom Theme System** — Dual themes ("Alex" dark theme & "AlexLight" light theme) crafted with OKLCH color space for vibrant, accessible colors
- **Glassmorphism Aesthetic** — Cards with `backdrop-blur-xl` and transparent backgrounds create a modern, premium look
- **Subtle Animations** — Smooth transitions, hover effects, and a dynamic rotating specialty text in the hero section
- **Responsive Typography** — Fluid text scaling from mobile to desktop (`text-5xl md:text-7xl lg:text-8xl`)

### 🧭 Navigation & User Experience

- **Sticky Navbar** — Always-accessible navigation with glass blur effect
- **Smooth Scroll** — Custom scroll-to-section function with offset for fixed header
- **Theme Toggle** — Light/dark mode switcher for user comfort
- **Mobile-First Menu** — Responsive dropdown menu for smaller screens
- **Semantic Icons** — Lucide React & React Icons for intuitive visual cues

### 📱 Components Architecture

| Component | Description |
|-----------|-------------|
| `Hero` | Main profile section with animated specialty carousel, bio, and social links |
| `Publications` | Academic publications list with glassmorphic cards, journal info, and DOI links |
| `Projects` | Project showcase in a 2-column grid with technology tags and repository links |
| `Timeline` | Vertical timeline showing education and certifications with alternating layout |
| `Conferences` | Congress presentations with year badges, location, and theme tags |
| `Navbar` | Responsive navigation with icon-labeled links and theme toggle |
| `Footer` | Simple, clean footer component |
| `ThemeToggle` | Dark/light mode switch |

---

## 📁 Project Structure

```
AlexLopezPHD/
├── public/
│   └── img/                    # Static images (profile picture)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Main profile & content section
│   │   ├── Publications.jsx    # Academic publications display
│   │   ├── Projects.jsx        # Project showcase cards
│   │   ├── Timeline.jsx        # Education timeline
│   │   ├── Conferences.jsx     # Congress presentations
│   │   ├── ThemeToggle.jsx     # Dark/light mode toggle  
│   │   └── Footer.jsx          # Footer component
│   ├── data/                   # Content data files
│   │   ├── publications.js     # Publications data
│   │   ├── projects.js         # Projects data
│   │   └── conferences.js      # Conferences data
│   ├── pages/
│   │   └── home/
│   │       └── Home.jsx        # Main page composition
│   ├── routes/
│   │   └── AppRoutes.jsx       # Route configuration
│   ├── context/                # React context providers
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind + DaisyUI theming
├── index.html                  # HTML template with SEO meta tags
├── vite.config.js              # Vite configuration
├── package.json
└── vercel.json                 # Vercel deployment config
```

---

## 🎨 Design System

### Color Palette (OKLCH)

The theme uses **OKLCH color space** for perceptually uniform colors:

| Color | Dark Theme | Usage |
|-------|------------|-------|
| **Primary** | `oklch(72% 0.219 149.579)` | 🟢 Vibrant green for emphasis |
| **Secondary** | `oklch(71% 0.143 215.221)` | 🔵 Cyan for secondary actions |
| **Accent** | `oklch(62% 0.214 259.815)` | 🔮 Purple for accents |
| **Base** | `oklch(15.5% 0.015 250)` | ⚫ Deep dark background |

### UI Patterns

- **Cards:** `backdrop-blur-xl bg-base-100/40 border border-base-content/10`
- **Hover States:** `hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5`
- **Badges:** `badge badge-dash badge-primary font-mono`
- **Buttons:** `btn btn-sm btn-soft` with hover color shifts

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Framework |
| **Vite** | 5.4.1 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.1.17 | Utility-first styling |
| **DaisyUI** | 5.5.5 | Component library & theming |
| **React Router** | 7.9.6 | Client-side routing |
| **Lucide React** | 0.554.0 | Icon library |
| **React Icons** | 5.5.0 | Additional icons (Fa, Si) |
| **PropTypes** | 15.8.1 | Runtime type checking |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Calotriton/AlexLopezPHD.git

# Navigate to project directory
cd AlexLopezPHD

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

The `vercel.json` configuration handles SPA routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🔍 SEO Implementation

The `index.html` includes comprehensive SEO meta tags:

- ✅ Title and description meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Canonical URL
- ✅ Keywords meta tag
- ✅ Robot directives
- ✅ Google Site Verification

---

## 📄 Code Styling

Tailwind CSS 4 with DaisyUI 5 is configured directly in CSS:

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "Alex";
  default: true;
  color-scheme: "dark";
  /* Custom OKLCH color definitions */
}
```

No `tailwind.config.js` or `postcss.config.js` required.

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

<div align="center">

### 👨‍🔬 About the Researcher

**Àlex López, Ph.D.** is an interdisciplinary ecologist and data scientist specializing in:
🌿 Freshwater & Marine Ecosystems
🐸 Herpetology  
📊 Biostatistics & Data Analysis
🤖 Machine Learning for Ecology

</div>

---

<div align="center">

[![Lucía Ordoñez Vilanova](https://avatars.githubusercontent.com/u/153511070?v=4&s=100 "Lucía Ordoñez Vilanova's GitHub Avatar")](https://github.com/Luovtyrell)

<img src="https://img.shields.io/badge/DESIGNED%20%26%20DEVELOPED%20BY-gray?style=flat&color=ffdf0a" height="20" alt="Designed & Developed by"/>

<img src="https://img.shields.io/badge/LUCIA%20ORDO%C3%91EZ%20VILANOVA-gray?style=flat&color=ffdf0a"  height="30" alt="Lucía Ordoñez Vilanova"/>

**Frontend Developer & UX/UI Designer**

<a href="mailto:luciaorvilanova@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat"  height="23" alt="Gmail" /></a> <a href="https://www.linkedin.com/in/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat" height="23" alt="LinkedIn" /></a> <a href="https://t.me/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat" height="23" alt="Telegram" /></a> <a href="http://discordapp.com/users/664163194989707308" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=flat" height="23" alt="Discord" /></a>

</div>
