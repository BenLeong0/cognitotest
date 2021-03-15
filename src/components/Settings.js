import React, { useContext } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import ChangeUsername from "./ChangeUsername";

const Settings = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  const { status } = useContext(AccountContext);

  // useEffect(() => {
  //   getSession()
  //     .then(() => {
  //       setLoggedIn(true);
  //     })
  //     .catch(() => {
  //       // go to login page
  //     });
  // }, []);

  return (
    <div>
      {status && (
        <>
          <h1>Settings</h1>
          <ChangePassword />
          <ChangeEmail />
          <ChangeUsername />
        </>
      )}
    </div>
  );
};

export default Settings;
