import users from "../../userData.json"
import { FriendsList } from "../FriendsList/FriendsList"


export function App() {
  
  return (
    <div>
     <FriendsList items={users} />
  </div>
  )
}

