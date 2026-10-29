// import React from "react";
import { CssVarsProvider, Typography } from '@mui/joy'
import Card from '@mui/joy/Card'
import CardOverflow from '@mui/joy/CardOverflow'
import { Box, Container, Stack } from '@mui/material'

const activeUsers = [
	{ memberNick: 'Martin', memberImage: '/img/martin.webp' },
	{ memberNick: 'Justin', memberImage: '/img/justin.webp' },
	{ memberNick: 'Rose', memberImage: '/img/rose.webp' },
	{ memberNick: 'Nusret', memberImage: '/img/nusret.webp' },
]
export default function ActiveUsers() {
	return (
		<div className='active-users-frame'>
			<Container>
				<Stack className='main'>
					<Box className='category-title'>Active Users</Box>
					<Stack className='cards-frame'>
						<CssVarsProvider>
							{activeUsers.length !== 0 ? (
								activeUsers.map((user, index) => {
									return (
										<Card key={index} variant='outlined' className='card'>
											<CardOverflow>
												<img
													src={user.memberImage}
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover',
													}}
													alt={user.memberNick}
												/>
											</CardOverflow>

											<CardOverflow variant='soft' className='product-detail'>
												<Stack className='info'>
													<Stack flexDirection={'row'}>
														<Typography className='title'>
															{user.memberNick}
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
