import React, { useState } from "react";
import Users from "../Users/Users";
import fakeData from "../../userData/fakeData";
import './AllUser.css'
import UserList from "../UserList/UserList";
const User= props => {
  const tenFriend = fakeData.slice(0, 15);
  const [friends] = useState(tenFriend);
  const [friendList, setFriendList] = useState([]);

  const handleAddFriend = friend => {
    
    const newFriendList = [...friendList, friend];
    setFriendList(newFriendList);
  };

  


  const showCaseFriend = friends.map(fr => (
    <Users
      key={fr.id}
      handleAddFriend={handleAddFriend}
     
      friend={fr}
    ></Users>
  ));

//

  return (
    <div className="friendContainer">
      <div className="allFriend">
        {showCaseFriend}
      </div>
      <div className="friendList">
        
        <UserList friendList={friendList}></UserList>
      </div>
    </div>
  );
};

export default User;
