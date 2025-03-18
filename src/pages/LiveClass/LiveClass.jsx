import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const LiveClass = () => {
  return (
    <div>
      <Link to="/liveclass"></Link>
      <Helmet>
        <title>Btaap | Class</title>
      </Helmet>
    </div>
  )
}

export default LiveClass
