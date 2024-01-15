export default function Friend({ user: { name, isOnline, id, avatar } }) {
  return (
    <div className="Card">
      <img src={avatar} alt="User photo" width="100" height="100" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
