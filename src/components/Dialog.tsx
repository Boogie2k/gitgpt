import React from "react";
import EditEmail from "./EditEmail";
import Logout from "./Logout";
import HandleRefreshApiKey from "./HandleRefreshApiKey";

const Dialog = () => {
  return (
    <>
      <EditEmail />;
      <Logout />
      <HandleRefreshApiKey />
    </>
  );
};

export default Dialog;
