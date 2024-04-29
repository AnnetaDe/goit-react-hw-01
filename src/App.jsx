import { Profile } from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Transactions from './components/Transactions/Transactions';
import users from './assets/users.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';
import './App.css';

const App = () => {
  return (
    <>
      <Profile users={users} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

export default App;
