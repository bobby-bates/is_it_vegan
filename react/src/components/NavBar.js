import React from 'react'
import { Link } from 'react-router'
import SearchBarContainer from '../containers/SearchBarContainer'
import Footer from './Footer'

const NavBar = props => {
  return(
    <div>
      <h1>Hi from NavBar!</h1>
      {/* <Link to='/cereals'>All Cereals</Link> */}
      <SearchBarContainer />
      {props.children}
      <Footer />
    </div>
  )
}

export default NavBar
