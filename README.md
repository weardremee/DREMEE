# DREMEE Website v1.0

A responsive single-page launch website for DREMEE.

## Files
- `index.html` — page structure and copy
- `styles.css` — full responsive styling
- `script.js` — modal, animation, and waitlist behavior
- `assets/favicon.svg` — browser icon

## Important: email collection
The current v1.0 form works immediately and stores signups in the visitor's browser only. This is suitable for design testing, but it does not send the email address to you.

For real email collection at no cost, connect the form to one of these:
1. Google Forms: create a one-question form, then replace the form action and field name.
2. FormSubmit: replace the JavaScript form handler with a standard form action to your email.
3. Netlify Forms: deploy on Netlify and add `data-netlify="true"` to each form.

## Free deployment with GitHub Pages
1. Create a free GitHub account and a new public repository named `dremee`.
2. Upload all files from this folder to the repository root.
3. Open Settings → Pages.
4. Under Build and deployment, choose “Deploy from a branch.”
5. Select branch `main` and folder `/root`, then save.
6. GitHub will provide a free website URL.

## Connect a custom domain
In GitHub Pages settings, enter your domain under “Custom domain.” GitHub will show the DNS records you need to add at your domain registrar.

Typical root-domain records:
- A → 185.199.108.153
- A → 185.199.109.153
- A → 185.199.110.153
- A → 185.199.111.153

Typical `www` record:
- CNAME → `<your-github-username>.github.io`

After DNS is verified, turn on “Enforce HTTPS.”

## Replace before launch
- `hello@dremee.com`
- Instagram and Xiaohongshu links
- Final domain name
- Real waitlist backend
