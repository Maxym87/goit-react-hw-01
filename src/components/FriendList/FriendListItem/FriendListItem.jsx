import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  
  return (
    <div>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
  <p>{isOnline ? "Online" : 'Offline'}</p>
</div>
  )
  
}