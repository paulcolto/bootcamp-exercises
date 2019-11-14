import React, { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";

const url = "https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/";

const App = props => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState()

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  const loadingElement = <div style={{ fontSize: "6rem" }}>Loading....</div>;
  const userCards = users.map((user, index) =>
    (
      <UserCard
        key={user.name}
        user={user}
        index={index}
        selectedUserIndex={selectedUser}
        setSelectedUserIndex={setSelectedUser}
      />
    )
  );

  return (
    <div className="container">
      {users.length ? userCards : loadingElement}
    </div>
  );
};

export default App;
