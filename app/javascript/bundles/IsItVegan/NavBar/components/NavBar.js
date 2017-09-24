import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
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
    return(
      <h1>Hi from NavBar!</h1>
    )
  }
}

export default NavBar
