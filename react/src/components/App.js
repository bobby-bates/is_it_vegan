import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import NavBar from './NavBar'
import Homepage from './Homepage'
import UserProfileContainer from '../containers/UserProfileContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={Homepage} />
        {/* <Route path='/users/:id' component={UserProfileContainer} /> */}
      </Route>
    </Router>
  )
}

export default App
