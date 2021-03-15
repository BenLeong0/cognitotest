import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession()
      .then(({ user }) => {
        //authenticate
        authenticate(user.username, password)
          .then(() => {
            // change email
            const attributes = [
              new CognitoUserAttribute({ Name: "email", Value: newEmail }),
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
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Change email</button>
      </form>
    </div>
  );
};

export default ChangeEmail;
