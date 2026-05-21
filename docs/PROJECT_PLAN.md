# 📋 RecipeHub — Project Plan

> **A phased roadmap to build RecipeHub from scratch, step by step.**

---

## Overview

This plan breaks the entire project into **6 phases**. Each phase builds on the previous one, so you always have a working (even if incomplete) version of the site. This is how real teams ship software — incrementally.

### How to Use This Plan

- Work through phases **in order** — don't skip ahead
- Each phase has **clear deliverables** — you know when it's done
- Tasks are marked with suggested ownership: **👤 Dev A**, **👤 Dev B**, or **🤝 Both**
- Use **GitHub Issues** to track each task and **Pull Requests** to merge work

---

## Phase 0: Project Setup (Week 1)

> *Get the foundation in place before writing any feature code.*

| # | Task | Owner | Details |
|---|---|---|---|
| 0.1 | Set up GitHub repository | 🤝 Both | Create repo, add `.gitignore`, `README.md`, and `LICENSE` |
| 0.2 | Define branching strategy | 🤝 Both | Use `main` (stable) + `dev` (integration) + feature branches (`feature/login`, `feature/recipe-card`, etc.) |
| 0.3 | Set up project structure | 🤝 Both | Create `/client` (frontend) and `/server` (backend) folders |
| 0.4 | Initialize frontend (React + Vite) | 👤 Dev A | `npm create vite@latest client -- --template react` |
| 0.5 | Initialize backend (Node + Express) | 👤 Dev B | Set up Express server with basic `/api/health` endpoint |
| 0.6 | Set up database | 👤 Dev B | Install MongoDB (local) or set up MongoDB Atlas (cloud) |
| 0.7 | Create environment config | 🤝 Both | Set up `.env` files, add `.env` to `.gitignore` |
| 0.8 | First PR & merge practice | 🤝 Both | Each person creates a small PR, the other reviews and merges it |

### ✅ Phase 0 Deliverables
- [ ] GitHub repo with proper structure
- [ ] Frontend runs locally (`npm run dev`)
- [ ] Backend runs locally with health check endpoint
- [ ] Database connection established
- [ ] Both developers have successfully created and merged a PR

---

## Phase 1: User Authentication (Weeks 2–3)

> *Users need to sign up and log in before they can post recipes.*

| # | Task | Owner | Details |
|---|---|---|---|
| 1.1 | Design signup/login pages (UI) | 👤 Dev A | Create responsive forms with validation |
| 1.2 | Build User model (database schema) | 👤 Dev B | `username`, `email`, `password` (hashed), `profilePic`, `createdAt` |
| 1.3 | Build auth API routes | 👤 Dev B | `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me` |
| 1.4 | Implement password hashing | 👤 Dev B | Use `bcrypt` to hash passwords before storing |
| 1.5 | Implement JWT authentication | 👤 Dev B | Issue JWT tokens on login, verify on protected routes |
| 1.6 | Connect frontend to auth API | 👤 Dev A | Handle login/signup forms, store token, redirect on success |
| 1.7 | Add auth context/state management | 👤 Dev A | Track logged-in user state across the app |
| 1.8 | Build basic navbar with login status | 👤 Dev A | Show "Login" or "Welcome, username" based on auth state |

### ✅ Phase 1 Deliverables
- [ ] Users can register with email and password
- [ ] Users can log in and receive a JWT
- [ ] Protected routes reject unauthenticated requests
- [ ] Frontend shows login state in navbar

---

## Phase 2: Recipe CRUD — The Core Feature (Weeks 3–5)

> *This is the heart of the app — creating, reading, updating, and deleting recipes.*

| # | Task | Owner | Details |
|---|---|---|---|
| 2.1 | Design Recipe model (schema) | 👤 Dev B | `title`, `description`, `ingredients[]`, `steps[]`, `image`, `cookTime`, `difficulty`, `cuisine`, `author`, `ratings`, `createdAt` |
| 2.2 | Build recipe API routes | 👤 Dev B | Full CRUD: `GET`, `POST`, `PUT`, `DELETE` on `/api/recipes` |
| 2.3 | Add image upload support | 👤 Dev B | Use `multer` + Cloudinary (or local storage to start) |
| 2.4 | Design recipe listing page | 👤 Dev A | Grid/card layout showing recipe cards with image, title, time, rating |
| 2.5 | Design single recipe page | 👤 Dev A | Full recipe view with ingredients, steps, author info, comments |
| 2.6 | Design recipe creation form | 👤 Dev A | Multi-step or single-page form with dynamic ingredient/step fields |
| 2.7 | Connect frontend to recipe API | 🤝 Both | Wire up all recipe pages to the backend |
| 2.8 | Add edit and delete functionality | 🤝 Both | Only recipe authors can edit/delete their own recipes |

### ✅ Phase 2 Deliverables
- [ ] Users can create a recipe with title, ingredients, steps, and an image
- [ ] All recipes appear on a browsable listing page
- [ ] Clicking a recipe opens its full detail page
- [ ] Authors can edit or delete their own recipes

---

## Phase 3: Search, Filter & Favourites (Weeks 5–6)

> *Make it easy to find recipes and save the ones you love.*

| # | Task | Owner | Details |
|---|---|---|---|
| 3.1 | Build search API | 👤 Dev B | Search by title, ingredients (text search or regex) |
| 3.2 | Add filter/sort options API | 👤 Dev B | Filter by cuisine, difficulty, cook time; sort by newest, rating |
| 3.3 | Build search bar UI | 👤 Dev A | Responsive search with live suggestions or debounced search |
| 3.4 | Build filter/sort UI | 👤 Dev A | Dropdowns or sidebar filters on the listing page |
| 3.5 | Add favourites feature (backend) | 👤 Dev B | `POST/DELETE /api/users/:id/favourites` — save/remove recipe refs |
| 3.6 | Add favourites feature (frontend) | 👤 Dev A | Heart/bookmark icon on recipe cards, "My Favourites" page |

### ✅ Phase 3 Deliverables
- [ ] Users can search recipes by keyword
- [ ] Users can filter by cuisine, difficulty, and cooking time
- [ ] Users can save/unsave recipes to their favourites
- [ ] A "My Favourites" page shows saved recipes

---

## Phase 4: Ratings, Comments & User Profiles (Weeks 6–7)

> *Add social features to make the platform feel alive.*

| # | Task | Owner | Details |
|---|---|---|---|
| 4.1 | Build rating system (backend) | 👤 Dev B | `POST /api/recipes/:id/rate` — store user rating, compute average |
| 4.2 | Build comment system (backend) | 👤 Dev B | `POST/GET/DELETE /api/recipes/:id/comments` |
| 4.3 | Build rating UI (stars component) | 👤 Dev A | Clickable star rating, display average rating |
| 4.4 | Build comment section UI | 👤 Dev A | Comment list with user avatar, text, timestamp; add comment form |
| 4.5 | Build user profile page | 🤝 Both | Show user info, their posted recipes, and their favourites |
| 4.6 | Add profile editing | 🤝 Both | Update display name, bio, profile picture |

### ✅ Phase 4 Deliverables
- [ ] Users can rate recipes (1–5 stars)
- [ ] Users can leave and delete comments
- [ ] Each user has a public profile page
- [ ] Users can edit their profile

---

## Phase 5: Polish & Deploy (Weeks 7–8)

> *Make it production-ready and put it on the internet.*

| # | Task | Owner | Details |
|---|---|---|---|
| 5.1 | Responsive design audit | 👤 Dev A | Test and fix all pages on mobile, tablet, and desktop |
| 5.2 | Error handling & loading states | 🤝 Both | Add spinners, error messages, empty states, 404 page |
| 5.3 | Input validation & sanitization | 👤 Dev B | Validate all inputs server-side, prevent XSS/injection |
| 5.4 | Performance optimization | 🤝 Both | Lazy loading images, pagination, caching |
| 5.5 | Write README with setup instructions | 🤝 Both | So anyone can clone and run the project |
| 5.6 | Deploy frontend | 👤 Dev A | Deploy to Vercel or Netlify |
| 5.7 | Deploy backend | 👤 Dev B | Deploy to Render, Railway, or Fly.io |
| 5.8 | Final testing on production | 🤝 Both | End-to-end test all features on the live site |

### ✅ Phase 5 Deliverables
- [ ] Website is live and accessible via a public URL
- [ ] All features work on the deployed version
- [ ] README is complete with setup and contribution instructions
- [ ] Both developers have contributed meaningfully (visible in Git history)

---

## Git Workflow Summary

```
main (stable, deployed)
 └── dev (integration branch)
      ├── feature/auth-ui
      ├── feature/auth-api
      ├── feature/recipe-model
      ├── feature/recipe-cards
      └── ...
```

### Rules
1. **Never push directly to `main`** — always go through `dev` via PR
2. **Create a feature branch** for every task (e.g., `feature/login-page`)
3. **Write descriptive commit messages** (e.g., "Add JWT authentication middleware")
4. **Create a Pull Request** when your feature is ready
5. **Your partner reviews the PR** before merging
6. **Resolve merge conflicts together** — they're a learning opportunity, not a problem

---

## Communication Plan

| What | How | When |
|---|---|---|
| Daily check-in | WhatsApp / Discord message | Every evening |
| Code review | GitHub Pull Request comments | Within 24 hours of PR creation |
| Blockers / questions | Direct message or call | As needed |
| Weekly sync | Video call (30 min) | Once a week (pick a day) |
| Task tracking | GitHub Issues + Project Board | Updated as tasks are picked up / completed |

---

> *Tip: Don't aim for perfection in any phase. Ship something that works, then improve it. Progress beats perfection every time.*
