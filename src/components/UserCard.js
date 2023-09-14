import React from "react";

const userCard = ({ el }) => {
  return (
    <div className="w-[350px] border-collapse py-10">
      <div className="">
        <h3>{el.name}</h3>
        <span>{el.phone}</span>
      </div>
    </div>
  );
};

export default userCard;
