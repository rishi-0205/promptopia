This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
promptopia
├─ app
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  │  │     └─ route.js
│  │  ├─ prompt
│  │  │  ├─ new
│  │  │  │  └─ route.js
│  │  │  ├─ route.js
│  │  │  └─ [id]
│  │  │     └─ route.js
│  │  └─ users
│  │     └─ [id]
│  │        └─ posts
│  │           └─ route.js
│  ├─ create-prompt
│  │  └─ page.jsx
│  ├─ layout.jsx
│  ├─ page.jsx
│  ├─ profile
│  │  ├─ loading.jsx
│  │  ├─ page.jsx
│  │  └─ [id]
│  │     └─ page.jsx
│  └─ update-prompt
│     └─ page.jsx
├─ components
│  ├─ Feed.jsx
│  ├─ Form.jsx
│  ├─ Nav.jsx
│  ├─ Profile.jsx
│  ├─ PromptCard.jsx
│  └─ Provider.jsx
├─ jsconfig.json
├─ models
│  ├─ prompt.js
│  └─ user.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ assets
│     ├─ icons
│     │  ├─ copy.svg
│     │  ├─ link.svg
│     │  ├─ loader.svg
│     │  ├─ menu.svg
│     │  └─ tick.svg
│     └─ images
│        ├─ grid.svg
│        ├─ logo-text.svg
│        └─ logo.svg
├─ README.md
├─ styles
│  └─ globals.css
├─ tailwind.config.js
└─ utils
   └─ database.js

```