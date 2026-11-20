// import { Box, Container, Stack, Typography } from '@mui/material'
// import Button from '@mui/material/Button'
import '../css/app.css'
// import { RippleBadge } from './MaterialTheme/styled'
import { Route, Switch, useLocation } from 'react-router-dom'
import '../css/footer.css'
import '../css/navbar.css'
import Footer from './components/footer'
import HomeNavbar from './components/headers/HomeNavbar'
import OtherNavbar from './components/headers/OtherNavbar'
import HelpPage from './screens/helpPage'
import HomePage from './screens/homePage'
import OrdersPage from './screens/ordersPage'
import ProductsPage from './screens/productsPage'
// import Test from './screens/Test'
import { useState } from 'react'
import AuthenticationModal from './components/auth'
import useBasket from './hooks/useBasket'
import UserPage from './screens/userPage'

function App() {
	const location = useLocation()
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()
	const [signupOpen, setSignupOpen] = useState<boolean>(false)
	const [loginOpen, setLoginOpen] = useState<boolean>(false)

	/** HANDLERS **/

	const handleSignupClose = () => {
		setSignupOpen(false)
	}
	const handleLoginClose = () => {
		setLoginOpen(false)
	}

	return (
		<>
			{location.pathname === '/' ? (
				<HomeNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
					setSignupOpen={setSignupOpen}
					setLoginOpen={setLoginOpen}
				/>
			) : (
				<OtherNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
					setSignupOpen={setSignupOpen}
					setLoginOpen={setLoginOpen}
				/>
			)}
			<Switch>
				<Route path='/products'>
					<ProductsPage onAdd={onAdd} />
				</Route>
				<Route path='/orders'>
					<OrdersPage />
				</Route>
				<Route path='/member-page'>
					<UserPage />
				</Route>
				<Route path='/help'>
					<HelpPage />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
			<Footer />

			<AuthenticationModal
				signupOpen={signupOpen}
				loginOpen={loginOpen}
				handleLoginClose={handleLoginClose}
				handleSignupClose={handleSignupClose}
			/>
		</>
	)
}

export default App
