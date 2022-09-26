import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"

export default function Header() {
  return (
    <header>
      <h4 className="logo">CLAIRE LOES</h4>
      <Link to="/info" activeClassName="active">
        <h4 className="info-link">INFO</h4>
      </Link>
    </header>
  )
}