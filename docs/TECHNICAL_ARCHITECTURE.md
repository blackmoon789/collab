# 🏗️ RecipeHub — Technical Architecture

> **A simplified overview of how RecipeHub is built. You don't need to memorize this — it's a reference for when you're curious.**

---

## How the App Works (The Simple Version)

```
┌─────────────────────────┐
│    YOUR BROWSER          │    ← This is the Frontend
│    (What you see)        │       Built with React
│    Pages, buttons, forms │
└────────────┬────────────┘
             │
             │  Sends requests over the internet
             │  ("Give me all recipes", "Log me in")
             ▼
┌─────────────────────────┐
│    THE SERVER             │    ← This is the Backend
│    (The brain)            │       Built with Node.js + Express
│    Handles logic & rules  │
└────────────┬────────────┘
             │
             │  Reads/writes data
             ▼
┌─────────────────────────┐
│    THE DATABASE           │    ← This is where data lives
│    (The memory)           │       MongoDB (cloud-hosted, free)
│    Users, recipes, etc.   │
└─────────────────────────┘
```

**That's it.** Every web app works this way — a frontend the user sees, a backend that does the thinking, and a database that remembers everything.

---

## What Each Part Does

### Frontend (the website you see in the browser)

| What | Tool | Plain English |
|---|---|---|
| UI framework | **React** | Lets us build the website out of reusable pieces (components) |
| Dev server | **Vite** | Makes development fast — you save a file and instantly see the change |
| Page navigation | **React Router** | Handles clicking between pages (login, recipes, profile) without full page reloads |
| Talking to server | **Axios** | A helper that makes it easy to send requests to the backend |
| Styling | **CSS** | Makes everything look good — colours, fonts, spacing, layout |
| Icons | **React Icons** | Ready-to-use icons (hearts, stars, search, etc.) |

### Backend (the server that runs behind the scenes)

| What | Tool | Plain English |
|---|---|---|
| Runtime | **Node.js** | Lets us run JavaScript on a server (not just in a browser) |
| Framework | **Express** | Makes it easy to create API endpoints (URLs the frontend calls) |
| Database helper | **Mongoose** | Makes it easy to read/write data to MongoDB |
| Password security | **bcrypt** | Scrambles passwords so nobody can read them — not even us |
| Login tokens | **JWT** | A digital pass that proves you're logged in |
| Image uploads | **multer** | Handles file uploads (recipe photos) |
| Security | **cors, dotenv** | Basic protections so the app is safe |

### Database (where data is stored)

| What | Tool | Plain English |
|---|---|---|
| Database | **MongoDB** | Stores data as flexible documents (like JSON files) |
| Hosting | **MongoDB Atlas** | Free cloud hosting — no need to install anything on your computer |

### Image Storage

| What | Tool | Plain English |
|---|---|---|
| Image hosting | **Cloudinary** | Stores recipe photos in the cloud, loads them fast, free tier available |

---

## What Gets Stored in the Database

### Users
When someone signs up, we save:
- Username, email, and password (scrambled)
- Profile picture and bio
- List of favourite recipes

### Recipes
When someone posts a recipe, we save:
- Title, description, and image
- List of ingredients (with quantities)
- Step-by-step instructions
- Cook time, difficulty, cuisine type
- Who posted it and when
- Ratings from other users

### Comments
When someone comments on a recipe, we save:
- The comment text
- Who wrote it
- Which recipe it's on
- When it was posted

---

## The API (How Frontend Talks to Backend)

Think of the API as a **menu** — the frontend looks at the menu, picks what it wants, and the backend prepares it.

### User Stuff
| What Happens | How |
|---|---|
| Sign up | Frontend sends username + email + password → Backend creates the account |
| Log in | Frontend sends email + password → Backend checks it and sends back a token |
| Get profile | Frontend asks "who am I?" → Backend looks up the token and responds |

### Recipe Stuff
| What Happens | How |
|---|---|
| Browse recipes | Frontend asks for recipes → Backend sends a list |
| View one recipe | Frontend asks for a specific recipe → Backend sends it |
| Post a recipe | Frontend sends recipe data → Backend saves it |
| Edit a recipe | Frontend sends updated data → Backend updates it (only if you're the author) |
| Delete a recipe | Frontend asks to delete → Backend removes it (only if you're the author) |

### Social Stuff
| What Happens | How |
|---|---|
| Add to favourites | Frontend says "save this recipe" → Backend adds it to your favourites list |
| Rate a recipe | Frontend sends a star rating → Backend saves it and updates the average |
| Comment on a recipe | Frontend sends comment text → Backend saves it |

---

## Project Folder Structure

```
collab/
├── docs/                    # 📄 Documentation (you are here)
│
├── client/                  # 🎨 Frontend (the website)
│   ├── src/
│   │   ├── components/      # Reusable pieces (navbar, recipe cards, etc.)
│   │   ├── pages/           # Full pages (home, login, recipe detail, etc.)
│   │   ├── context/         # Shared state (is the user logged in?)
│   │   ├── services/        # Functions that call the backend API
│   │   ├── App.jsx          # The main app file
│   │   └── index.css        # Global styles
│   └── package.json         # Frontend dependencies
│
├── server/                  # ⚙️ Backend (the server)
│   ├── controllers/         # The logic for each feature
│   ├── models/              # Database structure definitions
│   ├── routes/              # URL definitions (what endpoints exist)
│   ├── middleware/           # Helper functions that run on every request
│   └── server.js            # The starting point — runs the server
│
├── .gitignore               # Files Git should ignore
└── README.md                # Project description
```

> **You don't need to memorize this.** The AI agent will create and manage these files. This is here so you have a rough idea of where things live.

---

## How Deployment Works

When we're ready to go live:

```
┌──────────────┐         ┌──────────────────┐         ┌──────────────┐
│   Vercel      │  ←→     │   Render          │  ←→     │   MongoDB    │
│  (Frontend)   │         │   (Backend)       │         │   Atlas      │
│   FREE        │         │   FREE            │         │   FREE       │
└──────────────┘         └──────────────────┘         └──────────────┘
```

| Service | What It Hosts | Cost |
|---|---|---|
| **Vercel** | The website (frontend) | Free |
| **Render** | The server (backend) | Free |
| **MongoDB Atlas** | The database | Free (512MB) |
| **Cloudinary** | Recipe images | Free (25GB) |

> **Total cost: $0** — Everything runs on free tiers.

---

## Security (The Basics)

The AI agent will handle security best practices, but here's what you should know exists:

| What | Why |
|---|---|
| **Passwords are scrambled** | Even if someone hacked the database, they can't read passwords |
| **Login tokens expire** | You get logged out eventually, so stolen tokens don't work forever |
| **Inputs are checked** | The server makes sure nobody sends weird or dangerous data |
| **Secrets aren't in the code** | Passwords and API keys are stored in secret config files that don't go to GitHub |

---

> *You don't need to understand every line of this document. It's here so that when you're curious — "wait, where are recipe images stored?" — you have a place to look.*
