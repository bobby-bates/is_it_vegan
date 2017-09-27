import React from 'react'

const SearchResults = (props) => {
  let results
  if (props.results === '' || props.results === undefined) {
    results = ''
  } else {
    results =
      <h1>Search Results:</h1>
  }
  return(
    <div>{results}</div>
  )
}

export default SearchResults
