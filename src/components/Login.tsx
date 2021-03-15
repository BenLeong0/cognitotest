import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate, setStatus } = useContext(AccountContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    authenticate(username, password)
      .then((data: any) => {
        console.log("Logged in!", data);
        setStatus(true);
      })
      .catch((err: any) => {
        console.error("Failed to login!", err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
