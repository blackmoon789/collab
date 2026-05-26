# 📋 RecipeHub — Project Plan

> **A phased roadmap to build RecipeHub using AI agents, with two beginners steering the ship.**

---

## Overview

This plan breaks the project into **5 phases**. Each phase focuses on describing what we want, letting AI agents build it, reviewing the output, and learning from the results.

We're not writing every line of code ourselves. We're **directing the build** — and that's a totally valid (and increasingly common) way to create software.

### How to Use This Plan

- Work through phases **in order** — each one builds on the last
- Each phase has **clear goals** — you know when it's done
- Tasks are marked: **🧑 Human task** (you do this), **🤖 Agent task** (AI does this), or **🤝 Together** (you and AI collaborate)
- Don't stress about understanding every line of code — focus on the **big picture** first, details will click over time

---

## Phase 0: Getting Set Up (Week 1)

> *Set up the basics so you're ready to start building.*

| # | Task | Who | What It Means |
|---|---|---|---|
| 0.1 | Create a GitHub repository | 🧑 Human | Make a new repo on GitHub — this is where all the code lives |
| 0.2 | Learn the basics of Git | 🧑 Human | Understand `clone`, `add`, `commit`, `push`, `pull` — the 5 commands you'll use daily |
| 0.3 | Set up the project structure | 🤖 Agent | Tell the AI to create the folder structure with frontend and backend |
| 0.4 | Get frontend running locally | 🤖 Agent | AI sets up React + Vite, you just run `npm run dev` and see it in the browser |
| 0.5 | Get backend running locally | 🤖 Agent | AI sets up Express server with a basic health check |
| 0.6 | Set up the database | 🤖 Agent | AI configures MongoDB connection (we'll use free cloud hosting) |
| 0.7 | First commit & push | 🧑 Human | Push the initial setup to GitHub — celebrate your first commit! |
| 0.8 | Practice a Pull Request | 🤝 Together | Each person makes a tiny change, creates a PR, and the other merges it |

### ✅ Phase 0 — Done When:
- [ ] You have a GitHub repo with code in it
- [ ] You can run the frontend and see a page in your browser
- [ ] You can run the backend and hit the health check endpoint
- [ ] You've each done at least one commit and one pull request

---

## Phase 1: User Accounts (Weeks 2–3)

> *Users need to sign up and log in before they can do anything.*

| # | Task | Who | What It Means |
|---|---|---|---|
| 1.1 | Describe the signup/login pages | 🧑 Human | Sketch or describe what the login and signup pages should look like |
| 1.2 | AI builds the login/signup UI | 🤖 Agent | Tell the agent to create the pages — provide feedback until it looks right |
| 1.3 | AI builds the auth backend | 🤖 Agent | Agent creates user registration, login, password hashing, and JWT tokens |
| 1.4 | AI connects frontend to backend | 🤖 Agent | Agent wires up the forms so signing up and logging in actually works |
| 1.5 | Review & understand the flow | 🧑 Human | Ask the agent to explain: what happens when a user signs up? What is a JWT? How does the app know you're logged in? |
| 1.6 | Test it yourself | 🧑 Human | Create an account, log in, log out. Does it work? Does it feel right? |
| 1.7 | Request fixes & improvements | 🤝 Together | Tell the agent what feels off — "the error messages aren't clear", "it should redirect after login", etc. |

### ✅ Phase 1 — Done When:
- [ ] You can sign up with an email and password
- [ ] You can log in and see your username in the navbar
- [ ] You can log out
- [ ] You understand (at a high level) what JWT auth is and why it's needed

---

## Phase 2: Recipes — The Core Feature (Weeks 3–5)

> *This is the heart of the app. Everything else revolves around recipes.*

| # | Task | Who | What It Means |
|---|---|---|---|
| 2.1 | Describe what a recipe page should look like | 🧑 Human | What info should be on it? Image, title, ingredients, steps, cook time? Look at real recipe sites for inspiration |
| 2.2 | AI builds the recipe data model | 🤖 Agent | Agent creates the database structure for recipes |
| 2.3 | AI builds recipe creation form | 🤖 Agent | A form where you type in a recipe with all its details |
| 2.4 | AI builds recipe listing page | 🤖 Agent | A page showing all recipes in a nice grid with cards |
| 2.5 | AI builds single recipe view | 🤖 Agent | Click on a recipe card → see the full recipe with all details |
| 2.6 | AI adds image upload | 🤖 Agent | Upload a photo of the dish when posting a recipe |
| 2.7 | AI adds edit & delete | 🤖 Agent | You can edit or delete your own recipes |
| 2.8 | Review & polish | 🤝 Together | Go through every page, tell the agent what to fix. "Cards look too cramped", "the form is confusing", etc. |

### ✅ Phase 2 — Done When:
- [ ] You can post a recipe with a title, ingredients, steps, and a photo
- [ ] All recipes show up on a browse page
- [ ] You can click into any recipe and see the full details
- [ ] You can edit or delete your own recipes
- [ ] It looks good and feels nice to use

---

## Phase 3: Search, Favourites & Social Features (Weeks 5–7)

> *Make the app actually useful and fun.*

| # | Task | Who | What It Means |
|---|---|---|---|
| 3.1 | Describe search & filter needs | 🧑 Human | "I want to search by recipe name, filter by cuisine and difficulty" |
| 3.2 | AI builds search & filter | 🤖 Agent | Search bar, filter dropdowns, results update in real time |
| 3.3 | AI builds favourites feature | 🤖 Agent | Heart icon to save recipes, "My Favourites" page |
| 3.4 | AI builds rating system | 🤖 Agent | Star ratings on recipes, average rating displayed |
| 3.5 | AI builds comments | 🤖 Agent | Comment section under each recipe |
| 3.6 | AI builds user profiles | 🤖 Agent | Profile page showing your recipes and favourites |
| 3.7 | Big review & feedback round | 🤝 Together | Use the app like a real user. What's missing? What's confusing? What's broken? Tell the agent. |

### ✅ Phase 3 — Done When:
- [ ] You can search and filter recipes
- [ ] You can save favourites and see them on your profile
- [ ] You can rate and comment on recipes
- [ ] Each user has a profile page
- [ ] The app feels complete (even if not perfect)

---

## Phase 4: Polish & Go Live (Weeks 7–8)

> *Make it look professional and put it on the internet.*

| # | Task | Who | What It Means |
|---|---|---|---|
| 4.1 | Design review | 🧑 Human | Go through every page — is it pretty? Is it easy to use? Does it work on your phone? |
| 4.2 | AI fixes design issues | 🤖 Agent | "Make the cards bigger", "add a loading spinner", "the mobile layout is broken" |
| 4.3 | AI adds error handling | 🤖 Agent | Nice error messages, 404 page, empty states ("No recipes yet!") |
| 4.4 | AI deploys the app | 🤖 Agent | Frontend to Vercel, backend to Render, database on MongoDB Atlas — all free |
| 4.5 | Test on the live site | 🧑 Human | Try everything on the real URL. Share it with friends. |
| 4.6 | AI writes the README | 🤖 Agent | A nice project description so anyone who visits the GitHub repo understands what it is |
| 4.7 | Celebrate 🎉 | 🧑 Human | You built a real web app. That's awesome. |

### ✅ Phase 4 — Done When:
- [ ] The app is live on a public URL
- [ ] Everything works on the deployed version
- [ ] It looks good on both desktop and mobile
- [ ] The GitHub repo has a nice README
- [ ] You can show it to someone and explain what it does

---

## How We'll Use AI Agents

This is an **agent-heavy** project. Here's how the workflow looks in practice:

```
┌──────────────────────────────────────────────────────┐
│                    YOUR WORKFLOW                      │
│                                                      │
│   1. 💡 THINK about what you want                    │
│          ↓                                           │
│   2. 💬 DESCRIBE it to the AI agent                  │
│          ↓                                           │
│   3. 🤖 AGENT builds it                              │
│          ↓                                           │
│   4. 👀 REVIEW what it made                          │
│          ↓                                           │
│   5. 🔄 ITERATE — "change this", "fix that"          │
│          ↓                                           │
│   6. ✅ ACCEPT when it's good                        │
│          ↓                                           │
│   7. 🧠 ASK the agent to explain what it built       │
│          ↓                                           │
│   8. 📦 COMMIT & move on to the next thing           │
└──────────────────────────────────────────────────────┘
```

### Tips for Working with AI Agents

- **Be specific**: "Make the recipe cards look like Pinterest" is better than "make it look nice"
- **Give feedback**: Don't accept the first result if it's not right. Say "the spacing is off" or "I want rounded corners"
- **Ask questions**: "Why did you use this approach?" and "What does this code do?" are great questions
- **Don't be afraid to break things**: The agent can always fix it. That's the beauty of vibe coding.
- **Commit often**: Save your progress to Git after each working feature

---

## Git Workflow (Simplified)

We'll keep it simple:

```
main (the stable version)
 └── dev (where we work)
      └── feature branches (one per feature)
```

### The Only Rules

1. **Don't push directly to `main`** — merge through `dev`
2. **Commit often** with a short description of what changed
3. **Create Pull Requests** so your partner can see what's new
4. **It's okay to not understand everything** — that's what learning looks like

---

## Communication Plan

| What | How | When |
|---|---|---|
| Quick updates | WhatsApp / Discord | Whenever |
| "Hey look at this!" | Share screenshots / screen recordings | As things get built |
| Stuck on something | Call each other or ask the AI agent | As needed |
| Weekly check-in | Quick video call (15–30 min) | Once a week |

---

> *You don't need to know how to code to build something amazing. You just need a clear idea, good taste, and an AI agent that listens.*
