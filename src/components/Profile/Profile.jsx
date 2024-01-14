function Profile({name, tag, location, image, stats:{Followers, Views, Likes}}) {
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
        <div>
            <p>{Followers}</p>
            <p>{Views}</p>
            <p>{Likes}</p>
        </div>
 </div>
 )
}

export {Profile}