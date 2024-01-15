export default function Profile({ items: { username, tag, location, avatar, stats } }) {
  return (
    <div>
      <img src={avatar} alt="User photo" width="150" height="150" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        {Object.Keys(stats).map(key => {
          return (
            <li key={key}>
              <span>{key}</span>
              <span>{stats.key}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
