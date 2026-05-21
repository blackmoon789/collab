# 🏗️ RecipeHub — Technical Architecture

> **A complete technical blueprint of the systems, languages, tools, and infrastructure powering RecipeHub.**

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        CLIENT                           │
│              (React + Vite — runs in browser)           │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌────────┐│
│  │  Pages   │  │Components│  │  Context   │  │ Hooks  ││
│  │(Routes)  │  │(Reusable)│  │(Auth/State)│  │(Custom)││
│  └──────────┘  └──────────┘  └───────────┘  └────────┘│
└──────────────────────┬──────────────────────────────────┘
                       │  HTTP requests (Axios / Fetch)
                       │  (JSON data + JWT in headers)
                       ▼
┌─────────────────────────────────────────────────────────┐
│                        SERVER                           │
│             (Node.js + Express — REST API)              │
│                                                         │
│  ┌──────────┐  ┌───────────┐  ┌───────────┐  ┌───────┐│
│  │  Routes  │  │Middleware │  │Controllers │  │Models ││
│  │(/api/*)  │  │(auth,cors)│  │(logic)     │  │(DB)   ││
│  └──────────┘  └───────────┘  └───────────┘  └───────┘│
└──────────────────────┬──────────────────────────────────┘
                       │  Mongoose ODM
                       ▼
┌─────────────────────────────────────────────────────────┐
│                      DATABASE                           │
│               (MongoDB — NoSQL document DB)             │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐             │
│  │  Users   │  │ Recipes  │  │ Comments  │             │
│  └──────────┘  └──────────┘  └───────────┘             │
└─────────────────────────────────────────────────────────┘
```

---

## Tech Stack Breakdown

### Frontend

| Technology | Purpose | Why This Choice |
|---|---|---|
| **React 18** | UI library | Industry standard, component-based, massive ecosystem |
| **Vite** | Build tool & dev server | Blazing fast hot reload, modern defaults, simple config |
| **React Router v6** | Client-side routing | Declarative routing, nested routes, route protection |
| **Axios** | HTTP client | Cleaner API than fetch, interceptors for auth tokens |
| **CSS Modules** or **Vanilla CSS** | Styling | Scoped styles without extra dependencies to start |
| **React Icons** | Icon library | Thousands of icons, tree-shakeable |
| **React Hot Toast** | Notifications | Lightweight toast notifications for feedback |

### Backend

| Technology | Purpose | Why This Choice |
|---|---|---|
| **Node.js 20+** | Runtime | JavaScript everywhere — same language front and back |
| **Express.js** | Web framework | Minimal, flexible, huge community, easy to learn |
| **Mongoose** | MongoDB ODM | Schema validation, query building, middleware hooks |
| **bcrypt** | Password hashing | Industry standard for secure password storage |
| **jsonwebtoken (JWT)** | Authentication tokens | Stateless auth, easy to implement, widely used |
| **multer** | File upload handling | Middleware for multipart/form-data (image uploads) |
| **cors** | Cross-origin requests | Allow frontend to call backend API from different port/domain |
| **dotenv** | Environment variables | Keep secrets out of code |
| **express-validator** | Input validation | Validate and sanitize request data |

### Database

| Technology | Purpose | Why This Choice |
|---|---|---|
| **MongoDB** | Primary database | Flexible schema fits recipes well (varying ingredients/steps), JSON-like documents, free tier on Atlas |
| **MongoDB Atlas** | Cloud hosting | Free 512MB cluster, no server management, built-in backups |

### Image Storage

| Technology | Purpose | Why This Choice |
|---|---|---|
| **Cloudinary** | Image hosting & CDN | Free tier (25GB), automatic optimization/resizing, easy API |
| *Alternative: local `/uploads`* | Dev-only fallback | Store files on server during development |

---

## Project Structure

```
collab/
├── docs/                          # Project documentation (you are here)
│   ├── PROJECT_VISION.md
│   ├── PROJECT_PLAN.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   └── LEARNING_OUTCOMES.md
│
├── client/                        # Frontend (React + Vite)
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── assets/                # Images, fonts, etc.
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar/
│   │   │   ├── RecipeCard/
│   │   │   ├── SearchBar/
│   │   │   ├── StarRating/
│   │   │   └── Footer/
│   │   ├── pages/                 # Page-level components
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── RecipeList/
│   │   │   ├── RecipeDetail/
│   │   │   ├── CreateRecipe/
│   │   │   ├── Profile/
│   │   │   ├── Favourites/
│   │   │   └── NotFound/
│   │   ├── context/               # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/                 # Custom React hooks
│   │   │   └── useAuth.js
│   │   ├── services/              # API call functions
│   │   │   ├── authService.js
│   │   │   └── recipeService.js
│   │   ├── utils/                 # Helper functions
│   │   ├── App.jsx                # Root component with routes
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── .env                       # Frontend env vars (VITE_API_URL)
│   ├── package.json
│   └── vite.config.js
│
├── server/                        # Backend (Node + Express)
│   ├── config/
│   │   └── db.js                  # MongoDB connection setup
│   ├── controllers/               # Request handlers (business logic)
│   │   ├── authController.js
│   │   ├── recipeController.js
│   │   ├── commentController.js
│   │   └── userController.js
│   ├── middleware/                 # Custom middleware
│   │   ├── auth.js                # JWT verification
│   │   ├── errorHandler.js        # Centralized error handling
│   │   └── upload.js              # Multer config for images
│   ├── models/                    # Mongoose schemas
│   │   ├── User.js
│   │   ├── Recipe.js
│   │   └── Comment.js
│   ├── routes/                    # Express route definitions
│   │   ├── authRoutes.js
│   │   ├── recipeRoutes.js
│   │   ├── commentRoutes.js
│   │   └── userRoutes.js
│   ├── utils/                     # Helper functions
│   ├── .env                       # Backend env vars (MONGO_URI, JWT_SECRET, etc.)
│   ├── package.json
│   └── server.js                  # Entry point — starts Express
│
├── .gitignore                     # Ignore node_modules, .env, etc.
└── README.md                      # Project overview & setup instructions
```

---

## Database Schema Design

### Users Collection

```javascript
{
  _id: ObjectId,
  username: String,          // unique, required
  email: String,             // unique, required
  password: String,          // hashed with bcrypt, required
  displayName: String,
  bio: String,
  profilePic: String,        // Cloudinary URL
  favourites: [ObjectId],    // references to Recipe documents
  createdAt: Date,
  updatedAt: Date
}
```

### Recipes Collection

```javascript
{
  _id: ObjectId,
  title: String,             // required
  description: String,
  ingredients: [
    { name: String, quantity: String, unit: String }
  ],
  steps: [
    { stepNumber: Number, instruction: String }
  ],
  image: String,             // Cloudinary URL
  cookTime: Number,          // in minutes
  prepTime: Number,          // in minutes
  servings: Number,
  difficulty: String,        // "Easy", "Medium", "Hard"
  cuisine: String,           // "Indian", "Italian", "Mexican", etc.
  tags: [String],            // ["vegetarian", "quick", "dessert"]
  author: ObjectId,          // reference to User
  ratings: [
    { user: ObjectId, value: Number }  // 1–5
  ],
  averageRating: Number,     // computed field
  createdAt: Date,
  updatedAt: Date
}
```

### Comments Collection

```javascript
{
  _id: ObjectId,
  recipe: ObjectId,          // reference to Recipe
  author: ObjectId,          // reference to User
  text: String,              // required
  createdAt: Date
}
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Log in, receive JWT | No |
| GET | `/api/auth/me` | Get current user info | Yes |

### Recipes

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/recipes` | Get all recipes (with search/filter/sort query params) | No |
| GET | `/api/recipes/:id` | Get a single recipe by ID | No |
| POST | `/api/recipes` | Create a new recipe | Yes |
| PUT | `/api/recipes/:id` | Update a recipe (author only) | Yes |
| DELETE | `/api/recipes/:id` | Delete a recipe (author only) | Yes |
| POST | `/api/recipes/:id/rate` | Rate a recipe | Yes |

### Comments

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/recipes/:id/comments` | Get comments for a recipe | No |
| POST | `/api/recipes/:id/comments` | Add a comment | Yes |
| DELETE | `/api/comments/:id` | Delete a comment (author only) | Yes |

### Users

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/users/:id` | Get user profile | No |
| PUT | `/api/users/:id` | Update user profile | Yes |
| POST | `/api/users/:id/favourites` | Add recipe to favourites | Yes |
| DELETE | `/api/users/:id/favourites/:recipeId` | Remove from favourites | Yes |
| GET | `/api/users/:id/favourites` | Get user's favourite recipes | Yes |

---

## Development Tools & Environment

| Tool | Purpose |
|---|---|
| **VS Code** | Code editor (both developers should use the same one) |
| **Git** | Version control |
| **GitHub** | Repository hosting, PRs, Issues, Project Board |
| **Postman** or **Thunder Client** | API testing during backend development |
| **MongoDB Compass** | GUI for viewing/editing database during development |
| **npm** | Package manager |
| **nodemon** | Auto-restart server on file changes during development |
| **ESLint** | Code linting (consistent code style) |
| **Prettier** | Code formatting (consistent formatting) |

---

## Deployment Architecture

```
┌──────────────┐         ┌──────────────────┐         ┌──────────────┐
│   Vercel /   │  HTTPS  │   Render /       │  TCP    │   MongoDB    │
│   Netlify    │ ◄─────► │   Railway        │ ◄─────► │   Atlas      │
│  (Frontend)  │         │   (Backend API)  │         │  (Database)  │
└──────────────┘         └──────────────────┘         └──────────────┘
                                  │
                                  ▼
                         ┌──────────────┐
                         │  Cloudinary  │
                         │  (Images)    │
                         └──────────────┘
```

| Service | Tier | Cost |
|---|---|---|
| Vercel / Netlify | Free tier | $0 |
| Render / Railway | Free tier | $0 |
| MongoDB Atlas | Free (M0 — 512MB) | $0 |
| Cloudinary | Free (25GB) | $0 |

> **Total cost: $0** — The entire stack can be hosted for free during development and early use.

---

## Security Considerations

| Concern | Mitigation |
|---|---|
| Password storage | Hash with `bcrypt` (10+ salt rounds) — never store plain text |
| Authentication | JWT with expiration (e.g., 7 days), stored in `httpOnly` cookie or localStorage |
| Input validation | Validate all inputs server-side with `express-validator` |
| XSS protection | Sanitize user-generated content before rendering |
| CORS | Configure `cors` middleware to only allow your frontend domain |
| Environment secrets | Use `.env` files, never commit secrets to Git |
| Image uploads | Validate file type and size with `multer`, scan for malicious content |
| Rate limiting | Add `express-rate-limit` to prevent abuse on auth and API routes |

---

> *This architecture is intentionally beginner-friendly while following real-world patterns. As you learn, you can swap out or upgrade any layer.*
