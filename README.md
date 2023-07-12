# Repo Explorer

This is a Github repositories explorer app bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📚 Stacks

- Next JS: for the React framework
- Octokit: GitHub SDK for Browsers, Node.js, and Deno
- Github API: https://developer.github.com/v3/
- Material UI: to create the user interface
- TanStack Query: the data fetching library

## ⭐️ Features

- ✅ Search for Github users
- ✅ Display list of users with their repos
- ✅ Pagination
- ✅ Responsive UI

## ⚡️ Project Setup

First, you need to get your Github API access token by following the steps [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Then copy and paste the access token to `.env.local` file on your project root directory. You can find the example on `.env.example`.

### Development

On the project directory, run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production

```bash
npm run build
npm run start
```

## ⏭ What's Next

Here are some improvement ideas for the app:

- Add page routing for search result
