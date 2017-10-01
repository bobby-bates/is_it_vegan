import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'

import SearchResults from '../../HomePage/components/SearchResults'

class SearchBox extends Component {
  constructor(props) {
    // debugger
    super(props)

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      selectedSuggestion: null
    }
    this.getSuggestions = this.getSuggestions.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions(value) {
    // debugger
    let inputValue = value.trim().toLowerCase()
    let inputLength = inputValue.length
    let key = process.env.X_MASHAPE_KEY
    let results = []

    // debugger
    let headers = new Headers({ 'X-Mashape-Key': key,
                                'Accept': 'application/json' })
                                // debugger
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?metaInformation=true&number=7&query=' + inputValue, {
      credentials: 'same-origin',
      headers: headers
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      this.setState({
        suggestions: responseBody
      })
      // debugger
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))

  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue(suggestion) {
    return suggestion.name
  }

  // Use your imagination to render suggestions.
  renderSuggestion(suggestion) {
    // debugger
    return (
      <span>{suggestion.name}</span>
    )
    // return <SearchResults suggestion={suggestion}/>
  }

  onChange(event, { newValue, method }) {
    console.log(`onChange state.value ${this.state.value}`)
    console.log(`onChange method ${method}`)
    console.log(`onChange newValue ${newValue}`)
    this.setState({
      value: newValue
    })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value, reason }) {
    console.log(`onSuggestionsFetchRequested reason: ${reason}`)
    this.getSuggestions(value)
    // debugger
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  // **NOTE When user clicks or hits enter on selection:
  onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
    debugger
    event.preventDefault()
    this.setState({
      selectedSuggestion: suggestion,
      suggestion: [],
      value: ''
    })
  }

  render() {
    // const { value, suggestions } = this.state
    let value = this.state.value
    let suggestions = this.state.suggestions
    let selectedResults

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a food product',
      value,
      onChange: this.onChange,
      type: 'search'
    }

    if (this.state.selectedSuggestion != null) {
      selectedResults = <SearchResults />
    }
    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          // alwaysRenderSuggestions
        />
        {selectedResults}
      </div>
    )
  }
}

export default SearchBox
