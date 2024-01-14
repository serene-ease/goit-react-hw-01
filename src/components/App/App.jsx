import FriendsList from "../FriendsList/FriendsList"
import Profile from "../Profile/Profile";
import Table from "../Table/Table";

import currentUser from "../Profile/currentUser.json"
import friends from "../FriendsList/Friends.json"
import transactions from "../../Transactions.json"


function App() {
  
    return  (
              <div>
                {/* <Profile items={currentUser} /> */}
                <FriendsList items={friends} />
                <Table  items={transactions}  />
              </div>
            )
}

export {App};