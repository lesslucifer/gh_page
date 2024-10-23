This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Folder structure
``` bash
my-nextjs-project/
│
├── app/                       # Core application logic and routing
│   ├── (auth)/                # Grouping for authentication-related pages
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   ├── register/
│   │       ├── page.tsx
│   ├── dashboard/             # Dashboard page and layout
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   ├── api/                   # API routes
│   │   ├── users/
│   │       ├── route.ts
│   ├── layout.tsx             # Main layout file
│   ├── page.tsx               # Home page
│
├── components/                # Reusable components
│   ├── ui/                    # UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   ├── forms/                 # Form components
│   │   ├── LoginForm.tsx
│   ├── layouts/               # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│
├── lib/                       # Core functionality and utilities
│   ├── api.ts
│   ├── utils.ts
│
├── hooks/                     # Custom React hooks
│   ├── useUser.ts
│   ├── useAuth.ts
│
├── types/                     # TypeScript types
│   ├── user.ts
│   ├── api.ts
│
├── styles/                    # Global and component-specific styles
│   ├── globals.css
│
├── public/                    # Static assets
│   ├── images/
│       ├── logo.svg
│
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
```

## Description
The app Directory: Core Application Logic
The app directory houses the core logic and routing for your application:

(auth): Group authentication-related pages like login and registration.
dashboard: Contains the dashboard page and layout files.
api: Includes API routes, enabling serverless functions within your app.
layout.tsx: Defines the main layout, shared across multiple pages.
page.tsx: The main entry point, often used for the homepage.
Components: Reusable Building Blocks
Organize your components for modularity and reuse:

ui: General UI components like buttons and cards.
forms: Specific components for handling forms, such as LoginForm.
layouts: Layout components like headers and footers, ensuring consistent UI across pages.
The lib Directory: Core Functionality
The lib directory contains core functionality and utility functions:

api.ts: API client setup and functions for interacting with backend services.
utils.ts: Utility functions used throughout the application.
Custom Hooks: Encapsulating Logic
Store your custom React hooks in the hooks directory:

useUser.ts: Manages user-related state and logic.
useAuth.ts: Handles authentication processes.
Types: TypeScript Definitions
Organize your TypeScript type definitions in the types directory:

user.ts: Defines user-related types.
api.ts: Includes types related to API responses and requests.
Styles: Global and Component-Specific Styles
Keep your styles organized:

globals.css: Global CSS styles for the entire application.
Public Assets
Store static assets, such as images and icons, in the public directory:

images: Directory for image assets, like the project logo.