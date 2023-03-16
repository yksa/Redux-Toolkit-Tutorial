import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./app/features/user/userSlice";

function UserView() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {user.error && <div>Error: {user.error}</div>}
      <ul>
        {user.users.length !== 0 &&
          user.users.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default UserView;
