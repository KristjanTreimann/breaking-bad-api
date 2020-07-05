import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
	return (
		<header className='center'> /{/* Makes it a flexbox, centers  */}
			<img src={logo} alt='' />
		</header>
	)
}

export default Header
