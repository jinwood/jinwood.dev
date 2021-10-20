import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <div className="heading-container">
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <Link
        class="about-link"
        style={{ textDecoration: "none", marginTop: "10px" }}
        to="/about"
      >
        About
      </Link>
    </div>
  )
}

export default Header
