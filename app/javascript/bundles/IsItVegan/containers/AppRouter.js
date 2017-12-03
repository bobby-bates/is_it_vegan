import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from '../NavBar/components/NavBar'
import SearchBox from '../NavBar/components/SearchBox'
import FlashMessages from '../Alerts/components/FlashMessages'
import HomePage from '../HomePage/components/HomePage'
import SearchResults from '../HomePage/components/SearchResults'
// import SearchResultsPage from '../SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../UserPage/components/UserPage'
// import Footer from '../Footer/components/Footer'

const AppRouter = (props, railsContext) => {
  // debugger
  const user = props.user
  const messages = props.messages
  return (
    <Router>
      <div>
        <Route render={props => <NavBar {...props}
          user={user}
          railsContext={railsContext}
          />}
        />
        <Route render={props => <SearchBox {...props}
          user={user}
          railsContext={railsContext}
          />}
        />
        <Route render={props => <FlashMessages {...props}
          messages={messages}
          railsContext={railsContext}
          />}
        />
        <Route exact path='/' render={props => <HomePage {...props}
          railsContext={railsContext}
          />}
        />
        {/* <Route exact path='/' render={props => <SearchResults {...props}
          railsContext={railsContext}
          />}
        /> */}
        {/* <Route path='' component={SearchResultsPage} /> */}
        {/* <Route path='' component={UserPage} /> */}
        {/* <Route component={Footer} /> */}
      </div>
    </Router>
  )
}

export default AppRouter
