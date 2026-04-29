# Next.js Template - Modern & Production-Ready

Next.js template with TypeScript, Tailwind CSS v4. Perfect for starting new projects & testing.  
🧪 [Preview the Template](https://nextjs-template-two-blue.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 📦 Features

- ⚡ **Next.js 16** - Next.js with App Router
- 🎨 **Tailwind CSS v4** - Utility-first CSS with CSS variables, global colors
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🌗 **Dark/Light Mode** - CSS variable-based theming with system preference detection
- 📐 **Collapsible Sidebar** - Responsive sidebar navigation with persistent state
- 🔝 **Top Navbar** - Fixed navigation bar with search, notifications, and theme toggle
- 📁 **Organized Routing** - Example pages (Dashboard, Analytics, Users, Documents, Settings)
- 🤖 **Agent Instructions** - Basic instructions to ease AI agent use

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Theme colors & global styles
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── dashboard/          # Dashboard route
│   ├── analytics/          # Analytics route
│   ├── users/              # Users management route
│   ├── documents/          # Documents route
│   └── settings/           # Settings route
├── components/             # Reusable components
│   ├── icons/               # Icons folder
│   ├── AppShell.tsx        # Main layout wrapper
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Collapsible sidebar
│   ├── ThemeToggle.tsx     # Theme switcher button
│   └── ...
├── lib/                    # Context providers & utilities
│   ├── theme-context.tsx   # Theme state management
│   └── sidebar-context.tsx # Sidebar state management
└── public/                 # Static assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/next-tailwind-router-template.git

# Navigate to the directory
cd next-tailwind-router-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build for production                    |
| `npm start`     | Start production server                 |
| `npm run lint`  | Run ESLint                              |

## 🎨 Theme Customization

All theme colors are defined in **one place**: [`app/globals.css`](app/globals.css)

The CSS variables automatically apply to all HTML elements - no need to manually set colors for each component!

```css
:root {
  /* Light theme colors */
  --color-bg-primary: #ffffff;
  --color-text-primary: #111827;
  --color-accent-primary: #3b82f6;
}

.dark {
  /* Dark theme colors */
  --color-bg-primary: #0f172a;
  --color-text-primary: #f1f5f9;
  --color-accent-primary: #60a5fa;
}
```

### Available CSS Variables

| Variable                 | Description                |
| ------------------------ | -------------------------- |
| `--color-bg-primary`     | Main background color      |
| `--color-bg-secondary`   | Secondary/card backgrounds |
| `--color-text-primary`   | Primary text color         |
| `--color-text-secondary` | Secondary text color       |
| `--color-accent-primary` | Brand/accent color         |
| `--color-border-primary` | Border color               |

## 🧩 Adding New Routes

1. Create a new folder in `/app` (e.g., `/app/products`)
2. Add a `page.tsx` file
3. Add the route to the sidebar in `components/Sidebar.tsx`

## 📱 Responsive Behavior

| Breakpoint    | Sidebar                                | Navbar                     |
| ------------- | -------------------------------------- | -------------------------- |
| Desktop (lg+) | Full sidebar visible, can be collapsed | Full with all elements     |
| Mobile (<lg)  | Hidden, accessible via hamburger menu  | Condensed with menu button |

## ⚙️Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## 📄 License

MIT License - feel free to use this template for any project!
