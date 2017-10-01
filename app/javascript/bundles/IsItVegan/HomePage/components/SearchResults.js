import React from 'react'

const SearchResults = (props) => {

  return(
    <li>{`${props.suggestion.name} Aisle: ${props.suggestion.aisle}`}</li>
  )
}

export default SearchResults
