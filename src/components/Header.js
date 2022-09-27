import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"
import { useEffect } from "react";


export default function Header() {
  return (
    <header>
      <Link to="/info" className="logo-link" activeClassName="active">
        <h4 className="logo">CLAIRE LOES</h4>
      </Link>
      {/* <h4>INFO</h4> */}

    </header>
  )
}