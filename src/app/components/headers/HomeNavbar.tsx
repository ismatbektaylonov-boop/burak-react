import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import { NavLink } from 'react-router-dom'
import Basket from './Basket'

export function HomeNavbar() {
	const authUser = null
	return (
		<div className='home-navbar'>
			<Container className='navbar-container'>
				<Stack className='menu'>
					<Box>
						<NavLink to='/'>
							<img
								className='brand-logo'
								src='/icons/burak.svg'
								alt='logo'
								style={{ width: '125px', height: '30px' }}
							></img>
						</NavLink>
					</Box>
					<Stack className='links'>
						<Box className={'hover-line'}>
							<NavLink activeClassName={'underline'} to='/'>
								Home
							</NavLink>
						</Box>
						<Box className={'hover-line'}>
							<NavLink activeClassName={'underline'} to='/products'>
								Products
							</NavLink>
						</Box>
						{authUser ? (
							<Box className={'hover-line'}>
								<NavLink activeClassName={'underline'} to='/orders'>
									Orders
								</NavLink>
							</Box>
						) : null}
						{authUser ? (
							<Box className={'hover-line'}>
								<NavLink activeClassName={'underline'} to='/member-page'>
									My Page
								</NavLink>
							</Box>
						) : null}
						<Box className={'hover-line'}>
							<NavLink activeClassName={'underline'} to='/help'>
								Help
							</NavLink>
						</Box>

						{/* BASKET */}
						<Basket />

						{!authUser ? (
							<Box>
								<Button
									className='login-button'
									variant='contained'
									style={{ background: '#3776CC', color: '#f8f8ff' }}
								>
									Login
								</Button>
							</Box>
						) : (
							<img
								style={{ width: '50px', height: '50px', borderRadius: '24px' }}
								src={'/icons/default-user.svg'}
								alt='user'
							/>
						)}
					</Stack>
				</Stack>

				<Stack className='header-frame'>
					<Stack className='detail'>
						<Box className={'head-main-txt'}>
							World's Most Delicious Cousine
						</Box>
						<Box className={'wel-txt'}>The choice, not just a choice</Box>
						<Box className={'service-txt'}>24 hours service</Box>
						<Box className={'signup'}>
							{!authUser ? (
								<Button variant={'contained'} className={'signup-button'}>
									SIGN UP
								</Button>
							) : null}
						</Box>
					</Stack>
					<Box className='logo-frame'>
						<div className='logo-img'></div>
					</Box>
				</Stack>
			</Container>
		</div>
	)
}
