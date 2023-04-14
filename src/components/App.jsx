import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <h2>Task 1. Social network profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2. Statistics section</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Task 3. Friends list</h2>
      <FriendList friends={friends} />
      <h2>Task 4. Transaction history</h2>
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
