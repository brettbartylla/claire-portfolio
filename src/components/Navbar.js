import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"

export default function Navbar() {
  return (
    <nav id="nav">
      <h4>COMMERCIAL WORK</h4>
      <ul>
        <li>
          <Link to="/indeed" activeClassName="active">
            INDEED
          </Link>
        </li>
        <li>
          <Link to="/3m" activeClassName="active">3M</Link>
        </li>
        <li>
          <Link to="/mgb" activeClassName="active">MBG</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">HARRIS REED</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">SUNDAY POSTAGE</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">FRIENDS OF MINE</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">EXPERT ADMISSIONS</Link>
        </li>
      </ul>
      <br />
      <h4>INDEPENDENT WORK</h4>
      <ul>
        <li>
          <Link to="/project3" activeClassName="active">MOTION</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">BOOKS</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">POSTERS</Link>
        </li>
        <li>
          <Link to="/project3" activeClassName="active">TEXTILES</Link>
        </li>
      </ul>
    </nav>
  )
}