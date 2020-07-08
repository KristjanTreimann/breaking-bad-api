import React, { useState, useEffect } from 'react' // hook {useState} allows to use state in a functional component, {useEffect} are used to fire off when component loads to make a http request to get the data(character data, image, name)
import axios from 'axios' // Axios to make http request
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css' // Here goes styling for the app

const App = () => {
  // Using useState hook. const [defines piece of state, function we use to change/manipulate piece of state ]
  // then we set this to useState hook with a default which is gonna be the empty array to begin with.
  // Once we make the request in the useEffect hook we will fill this array with the data from the API.
  const [items, setItems] = useState([])

  // Check if the data is being loaded or not, if it's still being fetched
  const [isLoading, setIsLoading] = useState(true) // setIsLoading is a function to change the state. True by default, after its loaded we set it to false
  // SEARCH
  const [query, setQuery] = useState('') // represents what ever we type in


  // To make the request we need useEffect hook. Takes in an arrow function

  useEffect(() => {
    const fetchItems = async () => {
      /* const result = await axios(`https://www.breakingbadapi.com/api/characters`) */ // what we get back from axios. Use 'await' because axios returns a promise.
      // SEARCH - use query and its going to be a applevel state, so we need const [query, setQuery] = useState('')
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)
      setItems(result.data) // Set fetched data to piece of state
      setIsLoading(false) // If we got data we set loading to false
    }

    fetchItems() // Call out fetchItems
  }, [query]) // When we use useEffect we need to add dependancies as a 2nd perimeter, use [query] for now. Whenever dependancy(query) is changed useEffect fires off again. If its empty it fires off only once in the beginning. But now 
  /* if we have this query state what changes every time we type something useEffect fires off as well.  */
  return (
    <div className="container">
     <Header/>
     {/* We are passing that query up from the Search.js into App.js  */}
     <Search getQuery={(q) => setQuery(q)} /> {/* Prop called getQuery and set that to arrow function that takes in q(query). Also in Search.js it needs to be passed in */}
     <CharacterGrid isLoading={isLoading} items={items}/> {/* We wanna pass in isLoading and items as props. We are taking in our global app.js state and passing in to the CharacterGrid as a prop */}
    </div>
  );
}

export default App
 