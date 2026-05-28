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

### 5. Updating the contact form endpoint

The website uses Formspree for contact form submissions.

1. Open `src/data/site.js`.
2. Find `formspree`.
3. Update `formId` and `endpoint` if you create a new Formspree form.
4. Save and run `npm run build`.

### 6. Publishing changes with Git

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

## How to edit Szkolenia PL

All Polish training page content is stored in:

```text
src/data/site.js
```

Find this section:

```text
pages: {
  training: {
```

### 1. Where to edit course names

Edit course titles in:

```text
siteContent.pages.training.twoDayCourses.items
siteContent.pages.training.shortCourses.items
siteContent.pages.training.availableCourses.items
```

Change only the text inside `title: '...'`.

### 2. Where to edit prices

Edit prices in:

```text
siteContent.pages.training.twoDayCourses.info
siteContent.pages.training.shortCourses.info
siteContent.pages.training.availableCourses.items
siteContent.pages.training.consultation.price
siteContent.pages.training.stationary.price
```

For scheduled courses, change the text inside `price: '...'`.

### 3. Where to edit dates

Edit scheduled course dates in:

```text
siteContent.pages.training.availableCourses.items
```

Change the values inside `date: '...'` and `time: '...'`.

### 4. Where to paste Stripe links

Stripe placeholder links are stored in:

```text
siteContent.pages.training.availableCourses.items
siteContent.pages.training.consultation.paymentLink
```

Replace:

```text
https://buy.stripe.com/REPLACE_ME
```

with the real Stripe Payment Link.

### 5. Where to paste the Formspree endpoint

The Polish training form endpoint is stored in:

```text
siteContent.formspree.szkoleniaEndpoint
```

Replace:

```text
PASTE_FORMSPREE_SZKOLENIA_ENDPOINT_HERE
```

with the real Formspree endpoint for the Szkolenia PL form.

### 6. How to publish Szkolenia PL changes

Run:

```bash
git add .
git commit -m "update szkolenia pl"
git push
```
