project-root/
│
├─ server/
│   ├─ src/
│   │   ├─ config/
│   │   │   ├─ db.ts               # Database configuration (Knex and PostgreSQL)
│   │   │   └─ config.ts           # General configuration (e.g., server port, API keys)
│   │   ├─ controllers/
│   │   │   ├─ user.controller.ts  # User-related route handlers
│   │   │   └─ post.controller.ts  # Post-related route handlers
│   │   ├─ middleware/
│   │   │   └─ auth.middleware.ts  # Middleware for authentication and authorization
│   │   ├─ models/
│   │   │   ├─ user.model.ts       # User model and data access methods
│   │   │   └─ post.model.ts       # Post model and data access methods
│   │   ├─ routes/
│   │   │   ├─ user.routes.ts      # User-related API endpoints
│   │   │   └─ post.routes.ts      # Post-related API endpoints
│   │   ├─ services/
│   │   │   ├─ auth.service.ts     # Authentication and authorization logic
│   │   │   └─ email.service.ts    # Email-related logic (e.g., sending notifications)
│   │   └─ utils/
│   │       └─ helpers.ts          # Utility functions and helpers
│   ├─ migrations/
│   │   ├─ 01_create_users.ts      # Migration for creating the 'users' table
│   │   └─ 02_create_posts.ts      # Migration for creating the 'posts' table
│   ├─ seeds/
│   │   └─ 01_users_seed.ts        # Seed data for the 'users' table
│   ├─ tsconfig.json
│   └─ package.json                # Server-side dependencies and scripts
│
├─ client/
│   ├─ public/
│   │   ├─ favicon.ico             # Favicon
│   │   └─ index.html              # HTML template
│   ├─ src/
│   │   ├─ components/
│   │   │   ├─ Header.tsx          # Header component
│   │   │   └─ Footer.tsx          # Footer component
│   │   ├─ pages/
│   │   │   ├─ Home.tsx            # Home page component
│   │   │   ├─ About.tsx           # About page component
│   │   │   └─ Login.tsx           # Login page component
│   │   ├─ services/
│   │   │   ├─ api.ts              # API configuration and generic request functions
│   │   │   ├─ userService.ts      # User-related API calls
│   │   │   └─ postService.ts      # Post-related API calls
│   │   ├─ styles/
│   │   │   ├─ global.css          # Global styles
│   │   │   ├─ header.css          # Header component styles
│   │   │   └─ footer.css          # Footer component styles
│   │   ├─ utils/
│   │   │   └─ constants.ts        # Constants and shared variables
│   │   ├─ App.tsx
│   │   └─ index.tsx
│   ├─ tsconfig.json
│   └─ package.json                # Client-side dependencies and scripts
│
├─ package.json                    # Root-level scripts and devDependencies (e.g., concurrently)
│
└─ .gitignore                      # Git ignore file
