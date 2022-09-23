import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h4>COMMERCIAL WORK</h4>
      <ul>
        <li>
          <Link to="/indeed">INDEED</Link>
        </li>
        <li>
          <Link to="/project2">3M</Link>
        </li>
        <li>
          <Link to="/project3">MBG</Link>
        </li>
        <li>
          <Link to="/project3">HARRIS REED</Link>
        </li>
        <li>
          <Link to="/project3">SUNDAY POSTAGE</Link>
        </li>
        <li>
          <Link to="/project3">FRIENDS OF MINE</Link>
        </li>
        <li>
          <Link to="/project3">EXPERT ADMISSIONS</Link>
        </li>
      </ul>
      <br />
      <h4>INDEPENDENT WORK</h4>
      <ul>
        <li>
          <Link to="/project3">MOTION</Link>
        </li>
        <li>
          <Link to="/project3">BOOKS</Link>
        </li>
        <li>
          <Link to="/project3">POSTERS</Link>
        </li>
        <li>
          <Link to="/project3">TEXTILES</Link>
        </li>
      </ul>
    </nav>
  )
}