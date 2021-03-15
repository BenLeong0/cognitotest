import React, { useState, useContext } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(0);

  const fetchNumber = async () => {
    const url =
      "https://2w66akdpjh.execute-api.eu-west-2.amazonaws.com/dev/random-number?min=1&max=100";

    const number = await fetch(url, {
      method: "OPTIONS",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(number);
  };

  return (
    <div>
      <div>Random number: {number}</div>
      <button onClick={fetchNumber}>Fetch new number</button>
    </div>
  );
};

export default RandomNumber;
