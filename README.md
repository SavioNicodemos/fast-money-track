# Fast Money Track

A personal finance tracker built with React and TypeScript. Register income and expense transactions, visualize your balance summary, and keep your finances organized.

## Features

- Register income and expense transactions
- Dashboard with a summary of total income, total expenses, and current balance
- Transaction table listing all registered entries with category and date
- Modal form for adding new transactions
- Internationalization (i18n) with automatic browser/OS language detection — English and Portuguese supported out of the box
- Language toggle in the header to switch between EN and PT manually; preference is persisted in `localStorage`
- Currency and number formatting derived automatically from the user's locale (e.g. `pt-BR` → BRL, `pt-PT` / `de-DE` → EUR, `en-US` → USD, `en-GB` → GBP)
- In-memory mock API via MSW lib — no backend required to run locally

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript 6 |
| Build tool | Vite 8 |
| Styling | styled-components v6 + polished |
| i18n | i18next + react-i18next + i18next-browser-languagedetector |
| HTTP client | Axios |
| Mock API | MSW |
| Modals | react-modal |
| SVG handling | vite-plugin-svgr |

## Getting Started

> **pnpm is recommended**, but npm or yarn work too.

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm start
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm start` | Start the Vite dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm serve` | Preview the production build locally |
| `pnpm ts:check` | Run TypeScript type checking without emitting |
| `pnpm lint` | Lint source files with ESLint |
| `pnpm lint:fix` | Fix linting issues and format with Prettier |

## Project Structure

```text
src/
├── assets/          # SVG icons
├── components/
│   ├── Dashboard/            # Main layout wrapping Summary and TransactionsTable
│   ├── Header/               # Top bar with language toggle and "New Transaction" button
│   ├── NewTransactionModal/  # Modal form to create transactions
│   ├── Summary/              # Cards showing income, expenses, and balance
│   └── TransactionsTable/    # Table listing all transactions
├── hooks/
│   ├── useTransactions.tsx   # Context + hook for transaction state
│   └── useIntlLocale.ts      # Derives Intl locale and currency from browser locale
├── i18n/
│   ├── index.ts              # i18next setup with browser language detection
│   └── locales/
│       ├── en.json           # English translations
│       └── pt.json           # Portuguese translations
├── services/
│   └── api.ts                # Axios instance
├── styles/
│   └── global.ts             # Global styled-components styles
└── App.tsx
```
