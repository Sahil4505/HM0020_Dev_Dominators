# Financial Dashboard

A powerful and interactive financial dashboard built with *Next.js 14*, featuring transaction tracking, chart visualizations, account management, and premium features.

## 🚀 Features

- 📊 *Interactive financial dashboard* – Gain insights into your financial data with dynamic charts.
- 🔁 *Changeable chart types* – Toggle between different chart views.
- 🗓 *Account and date filters* – Easily filter transactions by date and account.
- 💹 *Detailed transactions table* – View and manage all transactions.
- ➕ *Form to add transactions* – Add new transactions with ease.
- 🧩 *Customizable select components* – Enhanced dropdowns for better UX.
- 💵 *Income and expense toggle* – Quickly switch between income and expenses.
- 🔄 *CSV transaction imports* – Bulk import transactions via CSV.
- 🔥 *API via Hono.js* – High-performance API built with Hono.js.
- 🪝 *State management via Tanstack React Query* – Optimized data fetching and caching.
- 🔗 *Bank account connections with Plaid* – Securely connect to bank accounts.
- 💳 *Premium upgrades via Lemon Squeezy* – Unlock premium features.
- 🔐 *Authentication via Clerk (Core 2)* – Secure user authentication.
- 🗑 *Bulk delete and search in transactions* – Manage transactions efficiently.
- ⚙ *Bank disconnection and subscription management* – Control bank links and premium subscriptions.
- 👤 *User settings customization* – Personalize user preferences.
- 🌐 *Built with Next.js 14* – Modern and scalable framework.
- 🎨 *Styled with TailwindCSS and Shadcn UI* – Beautiful and responsive UI.
- 💾 *PostgreSQL & Drizzle ORM* – Reliable database and ORM for seamless data management.

## 🏗 Tech Stack

- *Framework:* Next.js 14
- *Backend API:* Hono.js
- *Database:* PostgreSQL & Drizzle ORM
- *Authentication:* Clerk (Core 2)
- *State Management:* Tanstack React Query
- *Payments:* Lemon Squeezy
- *Bank Integration:* Plaid
- *Styling:* TailwindCSS & Shadcn UI

## 📦 Installation

sh
# Clone the repository
git clone https://github.com/your-repo/financial-dashboard.git

# Navigate to the project folder
cd financial-dashboard

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Start the development server
pnpm dev


## ⚙ Configuration

Ensure you configure the following environment variables in your .env file:

sh
DATABASE_URL=your_postgresql_database_url
HONO_API_KEY=your_hono_api_key
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
LEMON_SQUEEZY_API_KEY=your_lemon_squeezy_api_key


## 🛠 Usage

- *Dashboard:* View income, expenses, and trends.
- *Add Transactions:* Manually log transactions.
- *CSV Import:* Upload transactions in bulk.
- *Manage Accounts:* Link and disconnect bank accounts.
- *Premium Features:* Upgrade to access advanced features.

## 📜 License

This project is licensed under the *MIT License*.
