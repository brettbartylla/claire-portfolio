import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"

export default function Header() {
  return (
    <header>
      <h4 className="logo">CLAIRE LOES</h4>
      <Link to="/info" className="info-link" activeClassName="active">
        <h4>INFO</h4>
      </Link>
    </header>
  )
}