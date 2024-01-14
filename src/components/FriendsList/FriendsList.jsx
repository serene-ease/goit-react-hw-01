import {Profile} from "../Profile/Profile.jsx"


function FriendsList({items}) {
  
    return (
                <ul>
                    {items.map(item => (
                            <li key={item.id}>
                                <Profile user={item}/>
                            </li>
                    ))}
                </ul>
            )
  }

  export {FriendsList}