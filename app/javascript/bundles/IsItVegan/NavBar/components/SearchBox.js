import React, { Component } from 'react'

import SearchResults from '../../HomePage/components/SearchResults'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({search: e.target.value})
  }

  render() {

    return(
      <div className='top-bar'>
        {console.log(this.state)}
        <ul className='menu align-center'>
          <li><input type='search' value={this.state.search} onChange={this.handleChange} placeholder='Search Food Products' /></li>
          <li><button type='button' className='button' >Search</button></li>
        </ul>
      </div>
    )
  }
}

export default SearchBox
