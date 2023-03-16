import React, { useEffect } from "react";
import { fetchUsers } from "./app/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { useSelector, useDispatch } from "react-redux";

function UserView() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

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
