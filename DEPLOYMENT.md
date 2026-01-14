# Deployment Guide (Railway-Only)

This document describes deploying both frontend and backend to Railway.

## Prerequisites
- Railway account and a GitHub repo
- PostgreSQL service in Railway (or external DB)

## Frontend Deployment (railway-frontend)
1. Push code to GitHub in a repo with a frontend folder (real-estate-frontend).
2. In Railway, create a new project and import from GitHub.
3. In the project, add a service that points to the frontend directory (real-estate-frontend).
4. Add environment variable: NEXT_PUBLIC_API_URL=https://<backend-service>.railway.app/api
5. Start the frontend service.

## Backend Deployment (railway-backend)
1. In the same Railway project, add a service for the backend (real-estate-backend).
2. Add environment variables:
   - PORT=5000
   - NODE_ENV=production
   - DATABASE_URL=postgresql://...
   - JWT_SECRET=...
   - CORS_ORIGIN=https://<frontend-service>.railway.app
3. Link backend DB (Railway PostgreSQL) and ensure migrations run if applicable.
4. Start the backend service.

## DNS and URLs
- Frontend: https://<frontend-service>.railway.app
- Backend: https://<backend-service>.railway.app

## Post-Deployment
- Update frontend to point to the actual backend URL if it changes.
- Monitor logs in Railway for both services.

## Troubleshooting
- If frontend cannot reach API, verify NEXT_PUBLIC_API_URL.
- Check database connection strings and credentials.
- Ensure CORS origin matches frontend URL.
