import Friend from "../Friend/Friend"


function FriendsList({items}) {
  
    return (
                <ul>
                    {items.map(item => (
                            <li key={item.id}>
                                <Friend  user={item}/>
                            </li>
                    ))}
                </ul>
            )
  }

  export default FriendsList