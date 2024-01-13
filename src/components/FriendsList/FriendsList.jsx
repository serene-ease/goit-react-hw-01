import {Profile} from '../Profile/Profile'


export function FriendsList({users}) {
  
    return (
            <ul>
                {users.map(user => (
                        <li key={user.id}>
                            <Profile user={user}/>
                        </li>
                ))}
            </ul>
            )
  }