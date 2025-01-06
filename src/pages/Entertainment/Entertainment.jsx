import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Entertainment = () => {
  return (
    <div>
        <Helmet>
                <title>Btaap | Entertainment</title>
              </Helmet>
      <Link to="/entertainment"></Link>
    </div>
  )
}

export default Entertainment
