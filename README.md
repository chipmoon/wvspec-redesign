# WVSPEC Redesign — Cloudflare Pages

A premium "Deep Tech" redesign of the WVSPEC Precision Technology website, deployed on **Cloudflare Pages**.

## 🚀 Live Site
`https://wvspec-redesign.pages.dev`

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3 (Modern Grid/Flexbox), ES6+ JavaScript
- **Hosting**: Cloudflare Pages (static, global CDN)
- **Contact Form**: Formspree (serverless email delivery)
- **SEO**: Google Search Console, sitemap.xml, robots.txt

## 📁 Project Structure
```
wvspec-redesign/
├── assets/           # WVSPEC high-res images & diagrams
├── index.html        # Main SPA with SEO meta tags
├── style.css         # Premium design system & animations
├── app.js            # Interactive logic + Formspree form
├── _redirects        # Cloudflare Pages SPA routing
├── robots.txt        # Google crawl permissions
├── sitemap.xml       # Google Search Console sitemap
└── README.md
```

## ☁️ Deploying to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages**
2. Click **Create a project** → **Connect to Git**
3. Select your GitHub repo (`wvspec-redesign`)
4. Build settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
5. Click **Save and Deploy**

> Auto-deploy triggers on every `git push` to the main branch.

## 📧 Formspree Setup (Contact Form)

1. Sign up at [formspree.io](https://formspree.io) (free — 50 submissions/month)
2. Create a new form and get your Form ID
3. In `app.js`, replace `xwpbpkgj` with your real Form ID:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

## 🔍 Google Search Console (SEO Indexing)

After deploying, follow these steps to get indexed on Google:

### Step 1 — Verify Site
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → URL prefix: `https://wvspec-redesign.pages.dev`
3. Choose **HTML tag** verification method
4. Copy the `content` value from the meta tag
5. Replace `YOUR_GSC_CODE` in `index.html`:
   ```html
   <meta name="google-site-verification" content="PASTE_YOUR_CODE_HERE" />
   ```
6. Commit + push → Cloudflare auto-deploys → click **Verify** in GSC

### Step 2 — Submit Sitemap
1. In Google Search Console → **Sitemaps**
2. Enter: `sitemap.xml` → Submit

### Step 3 — Request Indexing
1. In GSC → **URL Inspection**
2. Paste: `https://wvspec-redesign.pages.dev/`
3. Click **Request Indexing**

> Google typically indexes within **1–7 days** for new sites.

---
*Deployed on Cloudflare Pages. Redesigned with precision by Antigravity.*
