import React from "react";
import Card from "./Card";

const Layout = () => {
  return (
    <div className="bg-pink-300 h-screen p-24">
      <div className="w-[50%] bg-white rounded-lg flex  mx-auto drop-shadow-2xl flex-col space-y-4 py-5 px-2">
        <Card />
      </div>
    </div>
  );
};

export default Layout;
