import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Classic = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = () => {
      navigate(`/room/${input}`);
    };
  return (
    <div>
      <Link to="/classic"></Link>
      <Helmet>
        <title>Btaap | Class</title>
      </Helmet>
      <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border   rounded"
      />
      <button
        className="btn mt-2 w-full md:w-auto bg-sky-600 text-white hover:text-black rounded"
        onClick={submitHandler}
      >
        Join
      </button>
      </div>
    </div>
  );
};

export default Classic;
