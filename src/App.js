import React, { useState, useEffect } from 'react'; // hook {useState} allows to use state in a functional component, {useEffect} are used to fire off when component loads to make a http request to get the data(character data, image, name)
import Header from './components/Header'
import './App.css'; // Here goes styling for the app

const App = () => {
  // Using useState hook. const [defines piece of state, function we use to change/manipulate piece of state ]
  // then we set this to useState hook with a default which is gonna be the empty array to begin with.
  // Once we make the request in the useEffect hook we will fill this array with the data from the API.
  const [items, setItems] = useState([])
  return (
    <div className="container">
     <Header/>
    </div>
  );
}

export default App;
 