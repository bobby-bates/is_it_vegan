import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails'

class NavBar extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      currentUser: this.props.current_user,
      search: ''
    }
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  signIn() {
    this.setState({currentUser: true})
  }

  signOut() {
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'})
    fetch('/users/sign_out', {
      method: 'DELETE',
      headers: header,
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        this.setState({currentUser: false})
      }
    })
  }

  handleChange(e){
    this.setState({search: e.target.value})
  }

  render() {

    let userMenu = () => {
      if (this.state.currentUser) {
        <ul className='vertical medium-horizontal menu'>
          <li><a href='#'><i className='fi-list'></i> <span>My Saved Searches</span></a></li>
          <li><a href='/users/edit'><i className='fi-list'></i> <span>My Account</span></a></li>
          <li><a href='/users/sign_out'><i className='fi-list'></i> <span>Sign Out</span></a></li>
        </ul>
      } else {
        <ul className='vertical medium-horizontal menu'>
          <li><a href='/users/sign_up'><i className='fi-list'></i> <span>Sign Up</span></a></li>
          <li><a href='users/sign_in'><i className='fi-list'></i> <span>Sign In</span></a></li>
        </ul>
      }
    }
    return(
      <div>
        {console.log(this.state)}

        <div className='top-bar'>
          <div className='top-bar-left'>
            <div className='menu'>
              <div className='menu-text'>Is It Vegan?</div>
            </div>
          </div>

          <div className='top-bar-right'>
            {userMenu}
          </div>
        </div>
        <div className='top-bar'>
          <ul className='menu'>
            <li><input type='search' value={this.state.search} onChange={this.handleChange} placeholder='Search Food Products' /></li>
            <li><button type='button' className='button' >Search</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar
