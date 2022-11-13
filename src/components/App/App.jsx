import { Container } from './App.styled';

import Profile from '../1Profile/Profile';
import user from '../user.json';

import data from '../data.json';
import Statistics from '../2Statistics/Statistics';

import friends from '../friends.json';
import FriendsList from '../3Friends/FriendsList';

import transactions from '../transactions.json';
import TransactionHistory from '../4Transaction/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" items={data} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
