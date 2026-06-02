# Deploy to Cloudflare Pages

This site is built with Astro and configured for Cloudflare Pages deployment.

## GitHub Actions (Recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that auto-deploys to Cloudflare Pages on every push to `main`.

### One-time setup:

1. **Create a Cloudflare API Token**
   - Go to [Cloudflare Dashboard → API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click **Create Token** → **Create Custom Token**
   - Token name: `GitHub Pages Deploy`
   - Permissions: **Cloudflare Pages** → **Edit**
   - Account Resources: **Include** → **Your Account**
   - Click **Continue to Summary** → **Create Token**
   - **Copy the token** (shown only once)

2. **Add the token to GitHub Secrets**
   - Go to `https://github.com/boldofficial/heating_air/settings/secrets/actions`
   - Click **New repository secret**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: *(paste your API token)*
   - Click **Add secret**

3. **Push to `main`** — deployment happens automatically!

## Manual Deploy (via Wrangler CLI)

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy
npx wrangler pages deploy dist/ --project-name=chicago-heating-air
```

## Alternative: Cloudflare Dashboard Git Integration

1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub and select `boldofficial/heating_air`
3. Build settings:
   - Framework: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

## Post-Deployment Checklist

- [ ] Set custom domain (e.g., `chicagoheatingair.pro`)
- [ ] Enable HTTPS (auto-enabled on Cloudflare)
- [ ] Configure Cloudflare Turnstile for the contact form
- [ ] Set up email forwarding or form handler for contact submissions
- [ ] Add Cloudflare Page Rules for caching if needed
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Business Profile NAP consistency

## Contact Form Backend Options

The contact form includes a client-side placeholder. For production, connect it to one of:

1. **Cloudflare Pages Functions** — Create `/functions/contact.js` to handle form submissions via email API
2. **Formspree** — Set `action="https://formspree.io/f/YOUR_FORM_ID"` on the form
3. **Basin** — Set `action="https://usebasin.com/f/YOUR_FORM_ID"` on the form
4. **Custom API** — Update the `submit` handler in `ContactForm.astro` to POST to your API endpoint

## Caching

Static assets in `/images/` are cached aggressively (1 year, immutable). Other assets (JS, CSS, fonts) use Cloudflare's default caching. For fine-grained control, add Page Rules in the Cloudflare dashboard.
