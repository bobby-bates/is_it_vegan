import React from 'react'
// import HelloWorld from './HelloWorld'

const HelloWorldWithRailsContext = (props, railsContext) => (
  <div>
    <p>props are: {JSON.stringify(props)}</p>
    <p>railsContext is: {JSON.stringify(railsContext)}
    </p>
  </div>
)
export default HelloWorldWithRailsContext
