# Donne: Deploy & Demo Guide

A client-ready demo storefront for **Donne Organic Store**, built from the PRD and TRD.
Stack: Next.js 14 (App Router) · TypeScript · Tailwind CSS. No database or API keys needed.

**What the demo includes**

| Page | Route | PRD feature |
|---|---|---|
| Home (hero, categories, best sellers, Why Donne, testimonials, newsletter) | `/` | F1 |
| Shop with search, category filter, sorting | `/shop` | F2 |
| Product detail (origin, certification, add to cart) | `/product/[slug]` | F3 |
| Cart (qty edit, delivery rule, totals, saved in browser) | `/cart` | F4 |
| Demo order confirmation | `/order-success` | F4 |

Products live in `lib/products.ts` (12 sample items). Brand colors live in `tailwind.config.js`.

---

## 1. Run it locally (2 minutes)

Requirements: **Node.js 18.17+** (20 recommended) and npm.

```bash
cd donne-web
npm install
npm run dev
```

Open http://localhost:3000.

Production check before deploying:

```bash
npm run build
npm start
```

---

## 2. Deploy to Vercel (recommended, free, gives a shareable link)

### Option A: via GitHub (best for ongoing client updates)

1. Create a new empty repo on GitHub, e.g. `donne-web`.
2. In the project folder:
   ```bash
   git init
   git add .
   git commit -m "Donne demo storefront"
   git branch -M main
   git remote add origin https://github.com/<your-username>/donne-web.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new, sign in with GitHub, and **Import** the `donne-web` repo.
4. Leave the defaults (Framework: **Next.js**, build command `next build`) and click **Deploy**.
5. After about a minute you get a live URL like `https://donne-web.vercel.app`.

Every `git push` to `main` redeploys automatically. Every branch or PR gets its own preview URL, which is handy for client feedback rounds.

### Option B: via Vercel CLI (no GitHub needed)

```bash
npm i -g vercel
cd donne-web
vercel          # follow the prompts, creates a preview URL
vercel --prod   # promotes to the production URL
```

### Custom domain (optional)

Vercel dashboard → your project → **Settings → Domains** → add `donne.com` (or a subdomain like `demo.donne.com`) and follow the DNS instructions.

### Alternatives

- **Netlify:** import the repo, build command `npm run build`, it auto-detects Next.js.
- **Self-host / VPS:** run `npm run build && npm start` behind Nginx, or use Docker with the standard Next.js Dockerfile.

---

## 3. Client demo script (about 5 minutes)

1. **Home:** show the mustard, cream and mud-brown identity, hero, categories and trust strip ("every product shows its origin and certification").
2. **Shop:** search "honey", filter by *Spices & Herbs*, sort by price.
3. **Product page:** point out the origin, certification and tags (PRD "trust elements on every product").
4. **Add to cart:** header counter updates, then open the cart and change quantities. Show the free-delivery nudge (free over $30).
5. **Place demo order:** show the confirmation, and explain that the live version adds payments, email/SMS and tracking.
6. **Mobile:** open the link on a phone or resize the browser to show it is mobile-first.
7. **Close with the roadmap** (section 5 below).

**Tell the client up front:** this is a front-end demo. Products are sample data, the cart is stored in the browser, no payment is taken, and emojis stand in for product photography.

---

## 4. Customizing for the client

| Change | Where |
|---|---|
| Products, prices, currency | `lib/products.ts` (`CURRENCY`, `products`, `categories`) |
| Brand colors | `tailwind.config.js` → `colors` |
| Fonts (Fraunces + Inter) | `app/layout.tsx` |
| Hero text, sections, testimonials | `app/page.tsx` |
| Free-delivery threshold and fee | `app/cart/page.tsx` (`FREE_DELIVERY_AT`, `DELIVERY_FEE`) |
| Contact details, footer | `components/Footer.tsx` |
| Real product photos | Add images to `public/products/` and use `next/image` in `ProductCard.tsx` and the product page |

Accessibility note from the PRD: don't use mustard (`#E1AD01`) for small text on white. Use mud brown or deep earth for text, and keep mustard for buttons and highlights.

---

## 5. From demo to production (maps to the TRD)

| Step | What to build | TRD ref |
|---|---|---|
| 1 | NestJS API + PostgreSQL + Prisma; move `lib/products.ts` into the DB | §3, §5, §6 |
| 2 | Replace local cart with server cart and accounts (JWT, OTP) | §6.2, §8 |
| 3 | Real checkout with Stripe or Razorpay (hosted fields + webhooks) | §7.1 |
| 4 | Admin panel: products, inventory, orders, coupons | §6.3 |
| 5 | Search (Meilisearch), email/SMS, courier integration | §14 |
| 6 | Product photos on S3/R2 + CDN, SEO schema, analytics | §9, §12 |
| 7 | Subscriptions, loyalty points, reviews | PRD F8–F10 |

Suggested next sprint: items 1 to 3 give a store that can take real orders.

---

## 6. Troubleshooting

- **`next/font` fails to fetch Google Fonts during build:** this only happens on machines with restricted internet. Vercel and normal networks are fine. To work offline, remove the `Fraunces`/`Inter` imports from `app/layout.tsx`; the site falls back to Georgia and system fonts.
- **Port 3000 in use:** `npm run dev -- -p 3001`.
- **Cart seems empty after deploy:** the cart is saved per browser (localStorage), so it is empty on a new device. This is expected.
- **Old Node version errors:** use Node 18.17 or newer (`node -v`).
