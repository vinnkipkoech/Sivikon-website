# Sivikon Backend

This backend is designed to deploy separately from the frontend. It provides a simple contact endpoint for the marketing site.

## Run locally

```bash
cd backend
npm install
npm start
```

## API endpoint

- `POST /api/contact`
  - expects a JSON body with `companyName`, `contactPerson`, `businessEmail`, and `projectScope`
  - returns a success response if the request is valid

## Deploy to Render

1. Create a new Web Service on Render.
2. Connect the service to this repository.
3. Set the root directory to `backend`.
4. Use `npm start` as the start command.
5. Optionally set `CORS_ORIGINS` to your Vercel URL, for example:
   `https://your-site.vercel.app`
