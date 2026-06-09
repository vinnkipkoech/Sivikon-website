# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend integration

This project includes a backend-ready contact form flow using `src/api/client.js`.

- Set `VITE_API_URL` in an environment file (see `.env.example`).
- The contact form posts JSON to `/api/contact` by default.
- If `VITE_API_URL` is omitted, the app uses a relative API path.

Example backend route:

```js
app.post('/api/contact', (req, res) => {
  // process request body
  res.json({ success: true });
});
```

## Deploying the frontend to Vercel

1. Push this repository to GitHub.
2. Create a new Vercel project and connect it to the repo.
3. Use the root directory for deployment.
4. Vercel will use `npm run build` and deploy the `dist` folder automatically.
5. Set an environment variable in Vercel:
   - `VITE_API_URL=https://<your-render-service>.onrender.com`

This repo includes `vercel.json` to route SPA paths correctly.

## Deploying the backend to Render

The backend lives in `backend/`.

1. Create a new Web Service on Render.
2. Connect it to this repository.
3. Set the root directory to `backend`.
4. Use `npm start` as the start command.
5. Optional: set `CORS_ORIGINS=https://<your-vercel-url>` to restrict access to your frontend.

Once both services are deployed, update `VITE_API_URL` on Vercel to point at the Render service URL.
