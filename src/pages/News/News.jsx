import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Link to="/news"></Link>
      <Helmet>
        <title>Btaap | News</title>
      </Helmet>
      <div></div>
    </div>
  );
};

export default News;
