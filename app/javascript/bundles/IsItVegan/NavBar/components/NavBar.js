import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails'

class NavBar extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      currentUser: props.user
    }
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  signIn() {
    this.setState({currentUser: this.props.user})
  }

  signOut() {
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'})
    // debugger
    fetch('/users/sign_out', {
      method: 'DELETE',
      headers: header,
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        this.setState({currentUser: null})
      }
    })
  }

  render() {
    // debugger
    let userMenu
    if (this.state.currentUser) {
      userMenu =
      <ul className='menu align-right'>
        <li className='menu-text'>{this.state.currentUser.username}</li>
        <li><a className='button' href='#'>My Saved Searches</a></li>
        {/* <li><button type='button' className='button' >My Saved Searches</button></li> */}
        <li><a className='button' href='/users/edit'>My Account</a></li>
        <li><a className='button' onClick={this.signOut}>Sign Out</a></li>
      </ul>
    } else {
      userMenu =
      <ul className='menu align-right'>
        <li><a className='button' href='/users/sign_up'>Sign Up</a></li>
        <li><a className='button' href='users/sign_in'>Sign In</a></li>
      </ul>
      // debugger
    }
    return(
      <div>
        {console.log(this.state)}

        <div className='top-bar'>
          <div className='top-bar-left'>
            <a className='menu menu-text' href='/'>Is It Vegan?</a>
          </div>

          <div className='top-bar-right'>
            {userMenu}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
