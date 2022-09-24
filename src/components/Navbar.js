import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"

export default function Navbar() {
  return (
    <nav id="nav">
      <h4>COMMERCIAL WORK</h4>
      <ul>
        <li>
          <Link to="/projects/indeed" activeClassName="active">
            INDEED
          </Link>
        </li>
        <li>
          <Link to="/projects/3m" activeClassName="active">3M</Link>
        </li>
        <li>
          <Link to="/projects/mgb" activeClassName="active">MBG</Link>
        </li>
        <li>
          <Link to="/projects/roge" activeClassName="active">ROGÊ</Link>
        </li>
        <li>
          <Link to="/projects/harris-reed" activeClassName="active">HARRIS REED</Link>
        </li>
        <li>
          <Link to="/projects/sunday-postage" activeClassName="active">SUNDAY POSTAGE</Link>
        </li>
        <li>
          <Link to="/projects/friends-of-mine" activeClassName="active">FRIENDS OF MINE</Link>
        </li>
        <li>
          <Link to="/projects/expert-admissions" activeClassName="active">EXPERT ADMISSIONS</Link>
        </li>
      </ul>
      <br />
      <h4>INDEPENDENT WORK</h4>
      <ul>
        <li>
          <Link to="/projects/motion" activeClassName="active">MOTION</Link>
        </li>
        <li>
          <Link to="/projects/books" activeClassName="active">BOOKS</Link>
        </li>
        <li>
          <Link to="/projects/posters" activeClassName="active">POSTERS</Link>
        </li>
      </ul>
    </nav>
  )
}