import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NavBar from '../NavBar/components/NavBar'
import HomePage from '../HomePage/components/HomePage'
// import SearchResultsPage from '../SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../UserPage/components/UserPage'
// import Footer from '../Footer/components/Footer'

const App = (props) => {
  debugger
  return (
    <Router>
      <div>
        <Route component={NavBar} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='' component={SearchResultsPage} /> */}
          {/* <Route path='' component={UserPage} /> */}
        </Switch>
        {/* <Route component={Footer} /> */}
      </div>
    </Router>
  )
}

export default App
