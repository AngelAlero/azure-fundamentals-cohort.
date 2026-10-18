# Azure AI Fundamentals Learning Hub

A responsive, single-page React app built with Vite. The learning hub introduces the Azure AI Fundamentals curriculum and gives each cohort member an interactive profile.

## Run locally

Requires Node.js 20.19 or later (or 22.12 or later).

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Azure Static Web Apps

1. Push this project to a GitHub repository.
2. In the Azure portal, create a **Static Web App** and authorize access to that repository.
3. Choose the branch to deploy and set the build details:
   - Build preset: **Custom**
   - App location: `/`
   - API location: leave empty
   - Output location: `dist`
4. Save the app. Azure Static Web Apps builds the Vite app and deploys the generated site on each push to the selected branch.

`public/staticwebapp.config.json` is copied into the build output. It configures SPA navigation fallback and basic security response headers.
