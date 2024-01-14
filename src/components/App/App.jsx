import users from "../../userData.json"
import { FriendsList } from "../FriendsList/FriendsList"


function App() {
  
    return  (
              <div>
                <FriendsList items={users} />
              </div>
            )
}

export {App};