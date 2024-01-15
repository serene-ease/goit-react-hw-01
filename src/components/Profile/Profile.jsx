export default function Profile({items:{ username, tag, location, avatar, stats: {label, value} }}) {
  return (
    <div className="card">
      <img src={avatar} alt="User photo" width="100" height="100" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        {/* {stats.map(({label, value}) => {
                return (
                    <li key={label}>
                        <span className="label">{label}</span>
                        <span className="value">{value}</span>
                    </li>                  
                )
            })} */}
      </ul>
    </div>
  );
}
