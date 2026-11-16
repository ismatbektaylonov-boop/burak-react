import { Dispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../../../css/home.css'
import { ProductCollection } from '../../../lib/enums/product.enum'
import { Member } from '../../../lib/types/member'
import { Product } from '../../../lib/types/product'
import MemberService from '../../services/MemberService'
import ProductService from '../../services/ProductService'
import ActiveUsers from './ActiveUsers'
import Advertisement from './Advertisement'
import Events from './Events'
import NewDishes from './NewDishes'
import PopularDishes from './PopularDishes'
import { setNewDishes, setPopularDishes, setTopUsers } from './slice'
import Statistics from './Statistics'

/** REDUX SLICE and SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
	setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
	setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
	setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
})

export default function HomePage() {
	const { setPopularDishes, setNewDishes, setTopUsers } =
		actionDispatch(useDispatch())

	useEffect(() => {
		// BACKEND server data request => Data
		const product = new ProductService()
		product
			.getProducts({
				page: 1,
				limit: 4,
				order: 'productViews',
				productCollection: ProductCollection.DISH,
			})
			.then(data => {
				console.log('data passed here', data)
				setPopularDishes(data)
			})
			.catch(err => {
				console.log(err)
			})

		product
			.getProducts({
				page: 1,
				limit: 4,
				order: 'createdAt',
				productCollection: ProductCollection.DISH,
			})
			.then(data => {
				console.log('data pssed here newDishes', data)
				setNewDishes(data)
			})
			.catch(err => {
				console.log(err)
			})

		//MEMBER

		const member = new MemberService()

		member
			.getTopUsers()
			.then(data => {
				setTopUsers(data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<div className='homepage'>
			<Statistics />
			<PopularDishes />
			<NewDishes />
			<Advertisement />
			<ActiveUsers />
			<Events />
		</div>
	)
}
