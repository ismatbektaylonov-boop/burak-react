// import React from "react";
import { CssVarsProvider, Typography } from '@mui/joy'
import Card from '@mui/joy/Card'
import CardOverflow from '@mui/joy/CardOverflow'
import { Box, Container, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { serverApi } from '../../../lib/config'
import { Member } from '../../../lib/types/member'
import { retrieveTopUser } from './selector'

/** REDUX SLICE and SELECTOR */
const topUsersRetriever = createSelector(retrieveTopUser, topUsers => ({
	topUsers,
}))

export default function ActiveUsers() {
	const { topUsers } = useSelector(topUsersRetriever)
	console.log('topUsers', topUsers)
	return (
		<div className='active-users-frame'>
			<Container>
				<Stack className='main'>
					<Box className='category-title'>Active Users</Box>
					<Stack className='cards-frame'>
						<CssVarsProvider>
							{topUsers.length !== 0 ? (
								topUsers.map((member: Member) => {
									const imagePath = `${serverApi}/${member.memberImage}`
									return (
										<Card key={member._id} variant='outlined' className='card'>
											<CardOverflow>
												<img
													src={imagePath}
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover',
													}}
													alt={member.memberNick}
												/>
											</CardOverflow>

											<CardOverflow variant='soft' className='product-detail'>
												<Stack className='info'>
													<Stack flexDirection={'row'}>
														<Typography className='title'>
															{member.memberNick}
														</Typography>
													</Stack>
												</Stack>
											</CardOverflow>
										</Card>
									)
								})
							) : (
								<Box className='no-data'>No Active Users</Box>
							)}
						</CssVarsProvider>
					</Stack>
				</Stack>
			</Container>
		</div>
	)
}
