import React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'

import Styled from 'styled-components'
import withWidth from '@material-ui/core/withWidth'


const LeftBoxSectionHeaderTypography = Styled(Typography)`
	&&
	{
		color: rgba(255, 255, 255, .95);
		font-weight: 700;
	}
`


const LeftBoxSectionTypography = Styled(Typography)`
	&&
	{
		color: rgba(255, 255, 255, .95);
		margin-left: .5rem;
		margin-bottom: .2rem;
	}
`


const RightBoxPaper = Styled(Paper)`
	&&
	{
		background: #fafafa;
		padding: .45rem;
		border-radius: 1.75rem;
		padding-top: 1.4rem;
		padding-bottom: 1.4rem;
	}
`


const RightBoxHeaderTypography = Styled(Typography)`
	&&
	{
		margin-bottom: .2rem;
		text-align: center
	}
`


const RightBoxSubHeaderTypography = Styled(Typography)`
	&&
	{
		text-align: center
	}
`


const LeftBox = Styled(Box)`
	&&
	{
		margin-bottom: 2.5rem;
		padding-left: .8rem;
		padding-right: .8rem;

		@media screen and (min-width: 800px)
		{

			min-width: 29rem;
			max-width: 29rem;
		}
	}
`


const RightBox = Styled(Box)`
	&&
	{
		@media screen and (min-width: 800px)
		{
			padding-right: .8rem;
			flex-grow: 1;
		}
	}
`

const Parent = Styled(Box)`
	&&
	{
		width: 100%;

		@media screen and (min-width: 0px)
		{
			margin-bottom: 2.75rem;
			display: block;
		}

		@media screen and (min-width: 800px)
		{
			margin-bottom: 1rem;
			display: inline-flex;
		}
	}
`


function OneThirdTwoThirdsGrid( { oneThirdComponent, twoThirdComponent } )
{

	return(
		<Parent >
			<LeftBox>
			{oneThirdComponent}
			</LeftBox>

			<RightBox >
			{twoThirdComponent}
			</RightBox>
		</Parent>
	)
}


export default withWidth()(OneThirdTwoThirdsGrid)

export {LeftBoxSectionTypography, LeftBoxSectionHeaderTypography, RightBoxPaper, RightBoxHeaderTypography, RightBoxSubHeaderTypography}