import FriendsList from "../FriendsList/FriendsList"
import Profile from "../Profile/Profile";
import Table from "../Table/Table";

import currentUser from "../../currentUser.json"
import friends from "../../Friends.json"
import transactions from "../../Transactions.json"


function App() {
  
    return  (
              <div>
                <Profile items={currentUser} />
                console.log (currentUser)
                <FriendsList items={friends} />
                console.log (friends)
                <Table  items={transactions} />
                console.log (transactions)
                
              </div>
            )
}

export {App};