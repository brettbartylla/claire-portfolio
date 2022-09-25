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
          <Link to="/roge" activeClassName="active">ROGÊ</Link>
        </li>
        <li>
          <Link to="/harris-reed" activeClassName="active">HARRIS REED</Link>
        </li>
        <li>
          <Link to="/sunday-postage" activeClassName="active">SUNDAY POSTAGE</Link>
        </li>
        <li>
          <Link to="/friends-of-mine" activeClassName="active">FRIENDS OF MINE</Link>
        </li>
        <li>
          <Link to="/expert-admissions" activeClassName="active">EXPERT ADMISSIONS</Link>
        </li>
      </ul>
      <br />
      <h4>INDEPENDENT WORK</h4>
      <ul>
        <li>
          <Link to="/motion" activeClassName="active">MOTION</Link>
        </li>
        <li>
          <Link to="/books" activeClassName="active">BOOKS</Link>
        </li>
        <li>
          <Link to="/posters" activeClassName="active">POSTERS</Link>
        </li>
      </ul>
    </nav>
  )
}