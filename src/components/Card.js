import React, { useState } from "react";
import { users } from "../users";

const Card = () => {
  const count = users.filter((user) => user.id > 0).length;
  const [isShow, setIsShow] = useState(true);
  const [showUsers, setShowUsers] = useState(users);
  const [totalCount, setTotalCount] = useState(count);
  const [clear, setClear] = useState("Clear All");

  const handleButton = () => {
    setIsShow(!isShow);
    if (isShow === true) {
      setTotalCount(0);
      setShowUsers([]);
      setClear("Show All");
    } else {
      setTotalCount(count);
      setShowUsers(users);
      setClear("Clear All");
    }
  };

  const MapUsers = () => {
    return (
      <>
        {showUsers.map((user) => {
          return (
            <div key={user.id} className="flex space-x-4 flex-row pl-2">
              <img
                src={user.avatar}
                alt="avatar"
                className="h-14 w-14 rounded-full bg-center"
              />
              <div>
                <h1 className="text-lg">{user.name}</h1>
                <h1 className="text-sm text-gray-500">Age: {user.age} years</h1>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-600 mx-auto">
        {totalCount} Birthdays today
      </h1>
      <MapUsers />
      <button
        onClick={handleButton}
        type="button"
        className="bg-pink-400 w-32 mx-48 p-2 text-xl text-gray-200 rounded-lg"
      >
        {clear}
      </button>
    </>
  );
};

export default Card;
