import React, { useState } from 'react' // import useState, because this is gonna be a form and when using form usually every input in a form its gonna have its own piece of state

const Search = ({ getQuery }) => { // Prop getQuery passed in from App.js
  // To add search functionality, first add piece of state to input
  const [text, setText] = useState('') // ('') empty string by default. Local state for form component

  // const onChange = (takes in whatever e.target.value is) => { we still want to call setText}
  const onChange = (q) => {
	  setText(q)
	  getQuery(q) // made new fn and adds as a prop to App.js Search 
  }
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          autoFocus
          // Every time we type something into this input its gonna run this onChange and its gonana put whatever we type into this piece of state -> "const [text, ..."
          /* onChange={(e) => setText(e.target.value)} */ // Fires off whener anything is typed. onChange = {(takes in event) => call setText() function}
		  onChange={(e) => onChange(e.target.value)} // need to pass in using search
		  value={text}
        ></input>
      </form>
    </section>
  );
};

export default Search
