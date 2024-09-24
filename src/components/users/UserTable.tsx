import React from "react";
import { User } from "./User";
interface UserTableProps {
  users: User[];
}
const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <>
      <table className="table table-striped table-bordered" >
      <thead className="thead-dark">
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        </thead>
        {users.map((user, key) => (
           <tbody className="thead-dark">
          <tr>
            <td>{++key}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
          </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default UserTable;
