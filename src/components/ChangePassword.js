import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession()
      .then(({ user }) => {
        //authenticate
        authenticate(user.username, password)
          .then(() => {
            //change password
            user.changePassword(password, newPassword, (err, result) => {
              if (err) console.error(err);
              console.log(result);
            });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
