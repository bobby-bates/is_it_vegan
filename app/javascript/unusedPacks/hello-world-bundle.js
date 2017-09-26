import ReactOnRails from 'react-on-rails'

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld'

// This is how react_on_rails can see the HelloWorld in the browser.
// Add all containers and components individually.
ReactOnRails.register({
  HelloWorld
})
