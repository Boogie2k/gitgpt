import React from "react";
import EditEmail from "./EditEmail";
import Logout from "./Logout";

import GenerateApiKeyPopup from "./GenerateApiKeyPopup";

const Dialog = () => {
  return (
    <>
      <EditEmail />;
      <Logout />
      <GenerateApiKeyPopup />
    </>
  );
};

export default Dialog;
