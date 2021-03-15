import React, { useContext } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const { logout, status } = useContext(AccountContext);

  return (
    <div>
      {status ? (
        <div>
          You are logged in. <button onClick={logout}>Logout</button>
        </div>
      ) : (
        "Please login below"
      )}
    </div>
  );
};

export default Status;
