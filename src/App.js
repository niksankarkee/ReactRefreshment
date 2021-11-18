import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: username, age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
