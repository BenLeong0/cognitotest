import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const ChangeUsername = () => {
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession()
      .then(({ user }) => {
        //authenticate
        authenticate(user.username, password)
          .then(() => {
            // change username
            const attributes = [
              new CognitoUserAttribute({
                Name: "username",
                Value: newUsername,
              }),
            ];

            user.updateAttributes(attributes, (err, results) => {
              if (err) console.error(err);
              console.log(results);
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
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Change username</button>
      </form>
    </div>
  );
};

export default ChangeUsername;
