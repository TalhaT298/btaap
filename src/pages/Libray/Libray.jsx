import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Libray = () => {
  return (
    <div>
      <Link to="/libray"></Link>
      <Helmet>
        <title>Btaap | Library</title>
      </Helmet>
    </div>
  );
};

export default Libray;
