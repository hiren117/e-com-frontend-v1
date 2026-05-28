# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

React 19 + TypeScript frontend for a full-stack e-commerce app. The companion Spring Boot backend lives in the sibling `e-com-backend/` repo and runs on `http://localhost:1090`.

## Commands

**Dev server (port 5173):**
```bash
npm run dev
```

**Type-check + build:**
```bash
npm run build
```

**Lint:**
```bash
npm run lint
```

## Architecture

`@` is aliased to `src/` (configured in `vite.config.ts`).

**Routing** (`src/App.tsx`):
- `/*` → `CustomerRouters` (public storefront with persistent `<Navigation>` and `<Footer>`)
- `/admin/*` → `AdminRouters` → `Admin` dashboard

**Key customer routes:**
- `/` `/login` `/register` → `HomePage`
- `/cart` → `Cart`
- `/checkout` → `Checkout`
- `/product/:productId` → `ProductDetails`
- `/account/orders` → `Order`
- `/account/orders/:orderId` → `OrderDetails`
- `/:levelOne/:levelTwo/:levelThree` → `Product` (category browsing)

**State management** (`src/Redux/`):
Redux Toolkit store with a single `auth` reducer. Product actions (`findProducts`, `findProductById`, `createProduct`, etc.) exist in `src/Redux/Customers/Product/` but are not yet wired into the store's `rootReducer`.

**API client** (`src/Config/api.ts`):
Pre-configured axios instance pointing to `http://localhost:1090`. Uses a request interceptor to read the JWT from `localStorage.getItem("jwt")` on every request, so authenticated calls work immediately after login without a page reload. The key `"jwt"` matches what `Auth/Action.ts` writes via `localStorage.setItem("jwt", ...)`.

**Static seed data** (`src/Data/`):
Local TypeScript/JSON fixtures for product categories (men/women/kurta/saree/etc.) used for UI prototyping before the backend is queried.

**UI libraries:** MUI v5, Headless UI v2, Heroicons v2, Tailwind CSS v4, react-alice-carousel.

## Git workflow (WSL/Windows quirk)

This repo lives on the Windows filesystem (`/mnt/c/...`), so git has two limitations when run from WSL:

1. **`git config` writes fail** — use `-c` flags inline instead:
   ```bash
   git -c user.name="hiren117" -c user.email="hirensolanki9697@gmail.com" commit -m "..."
   ```
2. **Push requires interactive credentials** — hand off to the terminal:
   ```
   ! git push
   ```
