// import { Box, Container, Stack, Typography } from '@mui/material'
// import Button from '@mui/material/Button'
import '../css/app.css'
// import { RippleBadge } from './MaterialTheme/styled'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Footer } from './components/footer'
import { HomeNavbar } from './components/headers/HomeNavbar'
import { OtherNavbar } from './components/headers/OtherNavbar'
import { HomePage } from './screens/homePage'
import { OrdersPage } from './screens/ordersPage'
import { ProductsPage } from './screens/productsPage'
import { UserPage } from './screens/userPage'

function App() {
	const location = useLocation()
	console.log('====================================')
	console.log(location)
	console.log('====================================')

	return (
		<>
			{location.pathname === '/' ? <HomeNavbar /> : <OtherNavbar />}
			<Switch>
				<Route path='/products'>
					<ProductsPage />
				</Route>
				<Route path='/orders'>
					<OrdersPage />
				</Route>
				<Route path='/member-page'>
					<UserPage />
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
