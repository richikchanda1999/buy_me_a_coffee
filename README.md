# Buy Me a Coffee

> A Buy Me a Coffee clone built with Next.js, Stripe & Tailwind CSS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

## Prerequisites

- Node.js v18 or higher
- npm, yarn, pnpm, or bun
- Stripe account (for processing payments)

## Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/buy_me_coffee.git
cd buy_me_coffee
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file in the project root with the following content:

```bash
STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

## Usage

Visit the homepage, fill out the `Buy me a coffee` form, enter your donation amount and payment details, then submit.

## Screenshots

Place your screenshots in `public/screenshots`. For example:

![Home Page](public/screenshots/home.png)

## Features

- Accept one-time payments and recurring tips via Stripe Checkout
- Form validation with React Hook Form & Zod
- Fingerprint detection with FingerprintJS
- Responsive UI built with Tailwind CSS & Radix UI
- Dark mode support
- Optimized fonts with next/font

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Stripe API
- Radix UI (Avatar, Label, Slot)
- Zod & React Hook Form
- FingerprintJS

## Deployment

Deploy on Vercel:

```bash
vercel --prod
```

See [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Roadmap

- [ ] User authentication
- [ ] Creator dashboard & analytics
- [ ] Customizable button styles
- [ ] Internationalization

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
