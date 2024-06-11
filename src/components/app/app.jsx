import Profile from "../profile/profile";
import userData from "../../components/profile/userData.json";
import friends from "../friendlist/frends.json";
import FriendList from "../friendlist/friendlist";
import TransactionHistory from "../transactionHistory/transactionHistory";
import transactions from "../transactionHistory/transactions.json";

export default function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
