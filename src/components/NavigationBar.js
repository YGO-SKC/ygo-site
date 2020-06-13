import React from 'react'
import styled from 'styled-components'

import { AppBar, Toolbar, Button, Link } from '@material-ui/core'

import { NAME_maps_ROUTE } from '../Routes'


export default function NavigationBar()
{
	const NavigationButton = styled(Button)`
		&&
		{
			text-transform: none;

			:hover
			{
				background: #5c5ca9;
			}
		}
	`
	return (
		<AppBar position='static' >
			<Toolbar>
				<Link
					style={ { marginRight: '30px' } }
					underline='none'
					color='inherit'
					href={NAME_maps_ROUTE.Home} >
					<NavigationButton color='inherit' >
						Supreme Kings Castle
					</NavigationButton>
				</Link>
				<Link
					underline='none'
					color='inherit'
					href={ NAME_maps_ROUTE.BanList } >
					<NavigationButton color='inherit' >
						Ban List
					</NavigationButton>
				</Link>
				<Link
					underline='none'
					color='inherit'
					href={ NAME_maps_ROUTE.About } >
					<NavigationButton color='inherit' >
						About
					</NavigationButton>
				</Link>
			</Toolbar>
		</AppBar>
	)
}