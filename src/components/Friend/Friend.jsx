function Friend({name, tag, location, image}) {
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
            </div>
            )
}

export default Friend