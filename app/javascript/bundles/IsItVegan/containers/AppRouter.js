import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/components/NavBar'
import HomePage from '../HomePage/components/HomePage'
// import SearchResultsPage from '../SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../UserPage/components/UserPage'
// import Footer from '../Footer/components/Footer'

const AppRouter = (props, railsContext) => {
  const state = {...props, ...railsContext}
  // debugger
  return (
    <Router>
      <div>
        <Route render={(state) => <NavBar {...this.state} />} />
        />
        <Switch>
          <Route exact path='/'
                 component={HomePage}
                 state={state}
          />
          {/* <Route path='' component={SearchResultsPage} /> */}
          {/* <Route path='' component={UserPage} /> */}
        </Switch>
        {/* <Route component={Footer} /> */}
      </div>
    </Router>
  )
}

export default AppRouter
