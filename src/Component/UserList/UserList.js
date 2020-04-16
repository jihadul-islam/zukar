import React from "react";
import "./UserList.css";

const FriendList = props => {
  const List = props.friendList;
 
  const totalIncome = List.reduce(
    (totalIncome, fr) => totalIncome + fr.basicSalary,
    0
    
 
  );

  
  

  return (
    <div>
      <div className="total">
        <h4>
          <b>Your Friends = {List.length}</b>
        </h4>
        <b> All Friends Salary = ${totalIncome}</b>
 
      </div>
     
    </div>
  );
};


export default FriendList;
