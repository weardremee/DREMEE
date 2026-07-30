# DREMEE Website v2.0

A responsive, static luxury brand website ready for GitHub Pages.

## Upload to GitHub

1. Unzip `dremee-website-v2.zip`.
2. Open the DREMEE repository on GitHub.
3. Choose **Add file → Upload files**.
4. Upload the contents inside the folder, including `index.html`, `styles.css`, `script.js`, `404.html`, and the `assets` folder.
5. Commit the changes.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main`, folder `/ (root)`, then Save.

## Connect real email signup

The page works in demo mode first. Demo submissions are stored only in the visitor's browser.

To receive actual emails:

1. Create a free Formspree form.
2. Copy the endpoint, similar to `https://formspree.io/f/abcdwxyz`.
3. Open `script.js`.
4. Replace:

```js
formEndpoint: ""
```

with:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz"
```

5. Commit the change.

## Details to personalize before public launch

- Replace Instagram and Xiaohongshu placeholder links in `index.html`.
- Add the final privacy policy and terms links.
- Change `hello@dremee.com` if needed.
- When product photography is ready, the CSS crystal artwork can be replaced with real campaign images.

## Custom domain

In **Settings → Pages**, enter your domain under **Custom domain**. GitHub will show the DNS records required by your domain registrar. Enable **Enforce HTTPS** after DNS verification finishes.
