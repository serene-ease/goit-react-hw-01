import css from './Friend.module.css';

export default function Friend({ user: { name, isOnline, avatar } }) {
  const status = isOnline ? css.online : css.offline;
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt="User photo" />
      <p className={css.name}>{name}</p>
      <p className={css.status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
