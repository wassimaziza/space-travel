import React from 'react'

const Home = (props) => {


return (<div className="container">
  <h1>Select an option:</h1>
  <div className="options">
    <div className="btn" onClick={() => props.changeView("AdminVerif")}>Admin</div>
    <div className="btn" onClick={() => props.changeView("user")}>User</div>
  </div>
</div>
  )
}


export default Home
