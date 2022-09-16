import React from "react";
import Child from "./Child";

const Parent = () => {
  const users = [
    { name: "Sandro", surname: "Javakhishvili", age: 26, id: 1 },
    { name: "Rick", surname: "Sanchez", age: 70, id: 2 },
    { name: "Morty", surname: "Smith", age: 15, id: 3 },
  ];
  const isUserLoggedIn = true;
  const userRender = (
    <div className="App">
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name} {user.surname} {user.age}
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <Child
        listOfUser={users}
        loggedIn={isUserLoggedIn}
        renderedUsers={userRender}
      />
    </div>
  );
};

export default Parent;
