# 🔧 Computer Repair Shop Management System

A modern, responsive, and secure web application built using the **Next.js App Router**, **TailwindCSS**, and **Kinde Auth** to manage support tickets, customer records, and technician workflows.

---

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
*   **Package Manager & Runtime:** [Bun](https://bun.sh/)
*   **Authentication:** [Kinde Auth](https://kinde.com/)
*   **Styling:** [TailwindCSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Error Monitoring:** [Sentry](https://sentry.io/)

---

## ✨ Features

*   **🔐 Secure Authentication:** Seamless integration with Kinde Auth for logging in, registering, and logging out.
*   **👥 Customer Management:** View, create, and manage comprehensive profiles for repair shop customers.
*   **🎫 Ticket System:** Issue, track, prioritize, and resolve repair service tickets.
*   **🌓 Dark Mode Support:** Theme toggle supporting System, Light, and Dark preferences.
*   **📱 Fully Responsive:** Adaptive layouts optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Getting Started

### 1. Installation

First, clone the repository and install the dependencies using Bun:

```bash
bun install
```

### 2. Environment Setup

Create a `.env.local` file in the root of the project and populate it with your Kinde credentials:

```env
# Kinde Auth Configuration
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000/login
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/home
```

> [!IMPORTANT]
> Make sure that `http://localhost:3000/login` is whitelisted under **Allowed logout redirect URLs** in your Kinde application settings!

### 3. Run Development Server

Launch the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (rs)/            # Authenticated route group (Home, Tickets, Customers)
│   │   │   ├── customers/   # Customers page routes
│   │   │   ├── tickets/     # Tickets page routes
│   │   │   └── home/        # Dashboard / home route
│   │   ├── api/             # API handlers (e.g. Kinde Auth route)
│   │   ├── login/           # Custom login page
│   │   └── layout.tsx       # Root layout
│   └── components/          # React components
│       ├── ui/              # shadcn/ui primitives
│       ├── Header.tsx       # Application header with navigation & logout
│       └── NavButton.tsx    # Custom responsive navbar links
├── public/                  # Static assets
└── package.json             # Scripts & npm dependencies
```
