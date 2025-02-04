import { Link } from 'gatsby'
import React from 'react'
import "./sass/styles.scss"

export default function Navbar() {
  return (
    <nav id="nav">
      <Link to="/" activeClassName="active" id='loadNavLink' className=''>
      <h1>Claire Loes</h1>
      </Link>

      <br />
      <h4>COMMERCIAL WORK</h4>
      <ul>
        <li>
          <Link to="/indeed" activeClassName="active" id='loadNavLink' className=''>
            Indeed
          </Link>
        </li>
        <li>
          <Link to="/cousins" activeClassName="active" id='loadNavLink' className=''>
            Cousins
          </Link>
        </li>
        <li>
          <Link to="/thespco" activeClassName="active" id='loadNavLink' className=''>
            The SPCO
          </Link>
        </li>
        {/* <li>
          <Link to="/garance-rousseau" activeClassName="active" id='loadNavLink' className=''>
            Garance Rousseau
          </Link>
        </li> */}
        <li>
          <Link to="/looking-homeward" activeClassName="active" id='loadNavLink' className=''>
            Looking Homeward
          </Link>
        </li>
        <li>
          <Link to="/3m" activeClassName="active" className='navLink'>3M</Link>
        </li>
        <li>
          <Link to="/roge" activeClassName="active" className='navLink'>Rogê</Link>
        </li>
        {/* <li>
          <Link to="/harris-reed" activeClassName="active">HARRIS REED</Link>
        </li> */}
        <li>
          <Link to="/mgb" activeClassName="active" className='navLink'>Garance Rousseau</Link>
        </li>
        <li>
          <Link to="/sunday-postage" activeClassName="active" className='navLink'>Sunday Postage Vintage</Link>
        </li>
        {/* <li>
          <Link to="/friends-of-mine" activeClassName="active" className='navLink'>FRIENDS OF MINE</Link>
        </li> */}
        {/* <li>
          <Link to="/expert-admissions" activeClassName="active">EXPERT ADMISSIONS</Link>
        </li> */}
      </ul>
      <br />
      <h4>INDEPENDENT WORK</h4>
      <ul>
        <li>
          <Link to="/motion" activeClassName="active" className='navLink'>Motion</Link>
        </li>
        <li>
          <Link to="/books" activeClassName="active" className='navLink'>Books</Link>
        </li>
        <li>
          <Link to="/posters" activeClassName="active" className='navLink'>Posters</Link>
        </li>
      </ul>
    </nav>
  )
}