import React, { useEffect, useState } from "react";
import axios from "axios";

const EnterData = () => {
  const [name, setName] = useState("");
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {
    const formData = {
      Name: name,
      Father_Name: fname,
      Email: email,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Father Name"
        value={fname}
        onChange={(e) => {
          setFName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default EnterData;
