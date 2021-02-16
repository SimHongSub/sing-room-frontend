import React from "react";
import { Route } from "react-router-dom";
import RoomListPage from "./pages/RoomListPage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <>
      <Route path="/room-list" component={RoomListPage} />
      <Route path="/room" component={RoomPage} />
    </>
  );
}

export default App;
