import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation'; // Import redirect if needed

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  // Fetch the logged-in user
  const loggedIn = await getLoggedInUser();

  // Handle case where user is not logged in
  if (!loggedIn) {
    // Redirect to login page or show a fallback UI
    redirect('/login'); // Example: Redirect to login page
    // Alternatively, you can return a fallback UI:
    // return <div>Please log in to access this page.</div>;
  }

  // Fetch accounts for the logged-in user
  const accounts = await getAccounts({ 
    userId: loggedIn.$id, // Now safe to access loggedIn.$id
  });

  // Handle case where accounts are not found
  if (!accounts) {
    return <div>No accounts found.</div>;
  }

  const accountsData = accounts.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // Fetch account details
  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData.slice(0, 2)}
      />
    </section>
  );
};

export default Home;