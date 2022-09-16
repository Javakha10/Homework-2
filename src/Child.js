import React from "react";
import Parent from "./Parent.js";

const Child = ({ listOfUser, loggedIn, renderedUsers }) => {
  return (
    <div>
      {!loggedIn ? (
        <h1>you are not authorized to see user list</h1>
      ) : listOfUser.length > 0 ? (
        renderedUsers
      ) : (
        <h1>no users in the system</h1>
      )}
    </div>
  );
};

export default Child;
