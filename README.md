# EC Consulting Ltd Website

Premium responsive React website for EC Consulting Ltd, built with Vite, Tailwind CSS, React Router and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `dist/`.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` or newer

Stripe payment buttons currently use placeholder links and should be replaced with live Stripe Payment Links before launch.

## How to edit this website

Almost all owner-editable content lives in one file:

```text
src/data/site.js
```

Open that file and edit the text inside quotes. Do not change the surrounding commas, brackets, or words like `icon`, `path`, `href`, or `featured` unless you are comfortable editing code.

### 1. Changing text

1. Open `src/data/site.js`.
2. Find the section you want, for example `home`, `pages.grants`, `pages.business`, `pages.training`, `pages.contact`, or `footer`.
3. Change the words inside quotes.
4. Save the file.
5. Run `npm run build` to check the website still builds.

### 2. Changing prices

1. Open `src/data/site.js`.
2. Find `pricing`.
3. Edit the `price` line for the package you want to change.
4. Example: change `price: 'From GBP 150'` to `price: 'From GBP 200'`.
5. Save and run `npm run build`.

### 3. Replacing Stripe links

1. Create the real Stripe Payment Link in Stripe.
2. Open `src/data/site.js`.
3. Find the pricing package you want.
4. Replace the placeholder `paymentLink` value with the real Stripe link.
5. Save and run `npm run build`.

### 4. Replacing images

1. Put the new image in `public/assets`.
2. Open `src/data/site.js`.
3. Find `assets`.
4. Replace the image path, for example `/assets/ewelina-portrait-hero.jpg`.
5. Keep the path starting with `/assets/`.
6. Save and run `npm run build`.

### 5. Publishing changes with Git

Run these commands from the project folder:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

If the computer says this is not a Git repository, create or connect the GitHub repository first:

```bash
git init
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git add .
git commit -m "Initial EC Consulting website"
git push -u origin main
```
