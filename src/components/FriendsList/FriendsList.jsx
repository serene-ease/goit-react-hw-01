import Friend from "../Friend/Friend"


export default function FriendsList({items}) {
  
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

