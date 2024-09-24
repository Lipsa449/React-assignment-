import React from 'react';
import './App.css';
import UserTable from './components/users/UserTable';
import { users } from './components/users/UserData';

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center">User List</h1>
      <UserTable users={users} />
    </div>
  );
}

export default App;