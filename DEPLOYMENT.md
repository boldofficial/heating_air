# Deploy to Cloudflare Pages

This site is built with Astro and configured for Cloudflare Pages deployment.

## Quick Deploy

1. **Connect your repo** in the Cloudflare Dashboard → Pages → Create a project → Connect to Git.

2. **Build settings:**
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18+ (or use the latest)

3. **Environment variables (optional):**
   - None required for static deployment.

4. **Deploy!** Cloudflare will automatically detect the `_headers`, `_redirects`, and `robots.txt` files from the output directory.

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
