import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/reducers/UserSlice";
import UserCard from "./UserCard";
const User = () => {
  const { user } = useSelector((r) => r.user);
  const dispath = useDispatch();
  console.log(user);
  useEffect(() => {
    dispath(getUser());
  }, []);

  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-center">
        {user.map((el) => (
          <UserCard el={el} />
        ))}
      </div>
    </div>
  );
};

export default User;
