 Software Engineer Portfolio

A modern, responsive software engineer portfolio built with React, TypeScript, and Tailwind CSS. This portfolio showcases skills, projects, and professional experience in a clean and interactive format.

 Features

 Modern UI/UX: Built with React and Tailwind CSS for a sleek, responsive design
 ComponentBased Architecture: Utilizing shadcn/ui components for a consistent design language
 Dark/Light Mode: Toggle between dark and light themes
 Interactive Projects Section: Filter and search functionality for projects
 Contact Form: Interactive contact form with validation
 Responsive Design: Optimized for all device sizes from mobile to desktop

 Pages

1. Home Page: Featuring hero section, about preview, projects preview, skills, testimonials, and contact CTA
2. About Page: Detailed information about the developer, experience timeline, education, and certifications
3. Projects Page: Comprehensive showcase of projects with filtering and search capabilities
4. Contact Page: Contact form and developer contact information

 Technology Stack

This project is built with:

 React: Frontend library for building user interfaces
 TypeScript: For typesafe JavaScript code
 Tailwind CSS: Utilityfirst CSS framework
 shadcn/ui: Highquality React components with Tailwind CSS
 React Router: For clientside routing
 React Query: For managing server state
 Vite: Nextgeneration frontend tooling

 Project Structure


├── public/                Public assets
├── src/
│   ├── components/        Reusable components
│   │   ├── home/          Home page specific components
│   │   ├── layout/        Layout components like header and footer
│   │   ├── theme/         Theme related components
│   │   └── ui/            UI components from shadcn/ui
│   ├── hooks/             Custom React hooks
│   ├── lib/               Utility functions
│   ├── pages/             Page components
│   ├── App.tsx            Main App component with routes
│   ├── main.tsx           Entry point
│   └── index.css          Global CSS
├── index.html             HTML entry point
├── package.json           Project dependencies and scripts
├── tailwind.config.ts     Tailwind CSS configuration
├── tsconfig.json          TypeScript configuration
└── vite.config.ts         Vite configuration


 Getting Started

 Prerequisites

 Node.js (v14 or higher)
 pnpm package manager

 Installation

1. Clone the repository:
   bash
   git clone https://github.com/yourusername/softwareengineerportfolio.git
   cd softwareengineerportfolio
   

2. Install dependencies:
   bash
   pnpm install
   

3. Start the development server:
   bash
   pnpm run dev
   

4. Open http://localhost:5173 to view the portfolio in your browser

 Building for Production

To build the application for production:

bash
pnpm run build


The build artifacts will be located in the dist directory.

 Customization

 Updating Content

 Edit personal information, projects, skills, and experience details in their respective component files
 Update images in the public directory

 Theme Customization

 Modify the theme colors in tailwind.config.ts
 Adjust global styles in src/index.css

 Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, GitHub Pages, etc.

Example deployment command for Vercel:

bash
vercel


 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

 License

This project is licensed under the MIT License  see the LICENSE file for details.
