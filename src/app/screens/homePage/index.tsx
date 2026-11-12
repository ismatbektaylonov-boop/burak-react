import { Dispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import '../../../css/home.css'
import { Product } from '../../../lib/types/product'
import ActiveUsers from './ActiveUsers'
import Advertisement from './Advertisement'
import Events from './Events'
import NewDishes from './NewDishes'
import PopularDishes from './PopularDishes'
import { retrievePopularDishes } from './selector'
import { setPopularDishes } from './slice'
import Statistics from './Statistics'

/** REDUX SLICE and SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
	setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
})

const popularDishesRetriever = createSelector(
	retrievePopularDishes,
	popularDishes => ({ popularDishes }),
)

export default function HomePage() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { setPopularDishes } = actionDispatch(useDispatch()) // eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { popularDishes } = useSelector(popularDishesRetriever)
	// Selector: Store => Data

	useEffect(() => {
		// BACKEND server data request => Data
		// Slice: Data => Store
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
