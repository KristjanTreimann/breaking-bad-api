import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => { // (catch passed in props from app.js using destructuring { items, isLoading}). Or we can use props.items and access from there.
	/* Check to see if its still loading or not. If it is, show spinner */
	// return isLoading ? (if true do something) : (if false do something else)
	// if its not loading we want to map through the items thats passed in and output them as cards
	return isLoading ? <Spinner/> : <section className="cards">
		{items.map(item => ( // use => () when working with jsx
			<CharacterItem key={item.char_id} item={item}></CharacterItem> //Pass the entire item in from CharacterItem
		))}
	</section>
}

export default CharacterGrid
