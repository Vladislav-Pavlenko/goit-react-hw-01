import FriendListItem from "../friendListItem/friendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
