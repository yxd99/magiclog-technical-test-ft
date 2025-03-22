> [!IMPORTANT]  
> Project is deployed [here](https://magiclog-technical-test-ft.vercel.app/)
> 
# MagicLog Technical Test Frontend

A modern e-commerce platform frontend application built with React, TypeScript, and Vite, featuring role-based access control and product management capabilities.

## 🚀 Technologies

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - JavaScript with syntax for types
- **Vite** - Next Generation Frontend Tooling
- **Zustand** - Lightweight state management
- **React Query** - Server state management and data fetching
- **React Router** - Navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautifully designed components
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Copy the environment variables:
```bash
cp .env.example .env
```

## 🔧 Development

To start the development server:

```bash
npm run dev
```

## 🏗️ Build

To build for production:

```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🔍 Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Application configuration
├── features/      # Feature-based modules
│   ├── admin/    # Admin dashboard and management
│   ├── auth/     # Authentication and authorization
│   ├── cart/     # Shopping cart functionality
│   ├── products/ # Product catalog and management
│   └── profile/  # User profile management
├── hooks/         # Custom React hooks
├── lib/          # Utility functions and libraries
├── routes/       # Application routing
├── store/        # Zustand store configuration
└── main.tsx      # Application entry point
```

## 🧩 Features

- **Authentication & Authorization**
  - Role-based access control (Admin, Seller, Customer)
  - Protected routes
  - User session management

- **Product Management**
  - Product catalog with pagination
  - Product creation and editing (Admin/Seller)
  - Stock management
  - SKU tracking

- **Shopping Cart**
  - Add/remove products
  - Quantity management
  - Cart persistence

- **User Interface**
  - Responsive design with Tailwind CSS
  - Modern UI components from Shadcn/UI
  - Form validation with Zod
  - Real-time updates with React Query

- **Development Features**
  - Hot Module Replacement (HMR)
  - TypeScript support
  - Code quality tools (ESLint, Prettier)
  - Environment variable support
  - Path aliases for improved imports

## 📝 License

This project is licensed under the MIT License.
