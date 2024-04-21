
import FriendListItem from './FriendListItem/FriendListItem'

export default function FriendsList({ friends }) {
  return (<ul>
    {friends.map((item) => (<li key={item.id}>
      <FriendListItem friend={item} />
</li>))}
</ul>)
}