export default function Profile({ items: { username, tag, location, avatar, stats } }) {
  const keys = Object.keys(stats);
  return (
    <div>
      <img src={avatar} alt="User photo" width="150" height="150" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <p>{stats.followers}</p>
      <ul>
        {keys.map(item => {
          return (
            <li key={item}>
              <span>{item}</span>
              <span>{stats[item]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
