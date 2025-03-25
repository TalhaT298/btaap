import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Classic = () => {
  return (
    <div>
      <Link to="/classic"></Link>
      <Helmet>
        <title>Btaap | Class</title>
      </Helmet>
      <div>
        
      </div>
    </div>
  );
};

export default Classic;
