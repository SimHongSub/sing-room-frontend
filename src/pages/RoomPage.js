import React from "react";
import SingScreen from "../components/SingScreen";
import UserScreen from "../components/UserScreen";

const RoomPage = () => {
  return (
    <div>
      <div>
        <SingScreen />
      </div>
      <div>
        <UserScreen />
        <UserScreen />
      </div>
    </div>
  );
};

export default RoomPage;
