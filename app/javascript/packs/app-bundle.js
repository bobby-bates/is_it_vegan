import ReactOnRails from 'react-on-rails'

import AppRouter from '../bundles/IsItVegan/containers/AppRouter'
import NavBar from '../bundles/IsItVegan/NavBar/components/NavBar'
import SearchBox from '../bundles/IsItVegan/NavBar/components/SearchBox'
import HomePage from '../bundles/IsItVegan/HomePage/components/HomePage'
import SearchResults from '../bundles/IsItVegan/HomePage/components/SearchResults'
import FlashMessages from '../bundles/IsItVegan/Alerts/components/FlashMessages'
// import SearchResultsPage from '../bundles/IsItVegan/SearchResultsPage/components/SearchResultsPage'
// import UserPage from '../bundles/IsItVegan/UserPage/components/UserPage'

// This is how react_on_rails can see the App in the browser.
// Add all containers and components individually.
ReactOnRails.register({
  AppRouter,
  NavBar,
  SearchBox,
  HomePage,
  FlashMessages,
  SearchResults
  // SearchResultsPage,
  // UserPage
})
