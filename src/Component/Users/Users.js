
import React from "react";
import './Users.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus,  faMinus } from "@fortawesome/free-solid-svg-icons";

const Users = props => {
  const { fistName, lastName, profile_pic, basicSalary, mobile,email} = props.friend;

  return (
    <div className="friendCard">
      <img src={profile_pic} alt="" />
      <h2>
        {fistName} {lastName}
      </h2>
      <div className="user-inp
      ">
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
        <p>Salary : ${basicSalary}</p>
      </div>
      <div>
        <button
          className="btn btn-primary m-2 color"
          onClick={() => props.handleAddFriend(props.friend)}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add Friend
        </button>
        <button
          className="btn btn-info m-2 remove-btn fas fa-user-minus"
          
        >
          <FontAwesomeIcon icon={faMinus} /> Remove
        </button>
        
      </div>
    </div>
  );
};

export default Users;
