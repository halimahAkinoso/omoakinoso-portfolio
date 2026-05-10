# Halimah Portfolio Frontend

This is the React + Vite frontend for the portfolio project.

## Local setup

1. Create a frontend env file in `halimah_portfolio`:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

2. Install dependencies if needed:

```powershell
npm install
```

3. Start the frontend:

```powershell
npm run dev
```

## Backend connection

The chatbot sends requests to:

```text
${VITE_API_BASE_URL}/chat
```

For local development, make sure the FastAPI backend is running on `http://127.0.0.1:8000`.

## Useful commands

```powershell
npm run dev
npm run lint
npm run build
```
