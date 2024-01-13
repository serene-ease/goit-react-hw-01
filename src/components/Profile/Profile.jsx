export function Profile({friend: {name, tag, location, image}}) {
 return (
 <div>
         <img
            src={image}
            alt="User photo"    
        />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
 </div>)
}