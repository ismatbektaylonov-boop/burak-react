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
import useBasket from './hooks/useBasket'
import UserPage from './screens/userPage'

function App() {
	const location = useLocation()
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket()

	return (
		<>
			{location.pathname === '/' ? (
				<HomeNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
				/>
			) : (
				<OtherNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
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
		</>
	)
}

export default App
