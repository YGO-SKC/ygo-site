
import React from 'react'
import styled from 'styled-components'

import { Typography } from '@material-ui/core'
import { MainContentContainer, ChildPaper } from './MainContent'
import Breadcrumb from './Breadcrumb'


const HomeContent = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin-top: 30px;
	align-content: center;
`

const CenteredText = styled(Typography)`
	text-align: center;
`

export default function Home()
{
	return (
		<MainContentContainer>
			<Breadcrumb crumbs={['Home']} />

			<ChildPaper>
				<CenteredText variant='h4' >
					Website Change Log
				</CenteredText>
				<br />

				<Typography variant='subtitle2' >
					&bull; <strong>March 21, 2020:</strong> Removed unneeded / simplified fonts to improve load times. Decoupled React.js resources to improve loading.
				</Typography>
				<Typography variant='subtitle2' >
					&bull; <strong>January 20, 2020:</strong> The site has slight new look - updated fonts and colors. There are slight performance improvements to page loading.
				</Typography>
				<Typography variant='subtitle2'>
					&bull; <strong>Dec 25, 2019:</strong> Site launch!
				</Typography>
			</ChildPaper>

			<ChildPaper>
				<CenteredText variant='h4' >
					API Change Log
				</CenteredText>
				<br />

				<Typography variant='subtitle2' >
					&bull; <strong>March 26, 2020:</strong> Added data for next ban list (04/01/2020).
				</Typography>
				<Typography variant='subtitle2' >
					&bull; <strong>March 21, 2020:</strong> Updated caching mechanism to reduce latency from DB to client. Added client level caching to minimize API to client requests. Updated implementations to increase code quality.
				</Typography>
				<Typography variant='subtitle2' >
					&bull; <strong>January 20, 2020:</strong> Jan 2020 ban list has been added. Updates to include more info about new/removed cards.
				</Typography>
				<Typography variant='subtitle2'>
					&bull; <strong>Dec 25, 2019:</strong> API launch!
				</Typography>
			</ChildPaper>
		</MainContentContainer>
	)
}