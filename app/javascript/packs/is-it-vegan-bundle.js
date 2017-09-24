import ReactOnRails from 'react-on-rails'

import App from '../bundles/IsItVegan/containers/App'
import NavBar from '../bundles/IsItVegan/NavBar/components/NavBar'
import HomePage from '../bundles/IsItVegan/HomePage/components/HomePage'
// import SearchResultsPage from '../bundles/IsItVegan/SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../bundles/IsItVegan/UserPage/components/UserPage'

// This is how react_on_rails can see the App in the browser.
// Add all containers and components individually.
ReactOnRails.register({
  App,
  NavBar,
  HomePage,
  // SearchResultsPage,
  // UserPage
})
