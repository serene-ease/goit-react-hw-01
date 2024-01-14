import State from "../State/State"

function Profile({name, tag, location, image, stats:{followers, views, likes}}) {
 return (
 <div className="Card">
         <img
            src={image}
            alt="User photo"
            width="100" 
            height="100"    
         />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
        <ul>
            <State label="Followers" value={followers}/>,
            <State label="Views" value={views}/>,
            <State label="Likes" value={likes}/>
        </ul>
 </div>
 )
}

export default Profile