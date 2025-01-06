import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div>
      <Helmet>
        <title>Btaap | Business</title>
      </Helmet>
      <Link to="/business"></Link>
    </div>
  );
};

export default Business;
