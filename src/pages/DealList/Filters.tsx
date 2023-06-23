import { TextField } from '@equinor/eds-core-react'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin: 32px;
	display: grid;
	grid-template-columns: repeat(4, 264px);
	grid-gap: 16px;
`

export default function Filters() {
	return (
		<Wrapper>
			{[...Array(16)].map((x, i) => (
				<TextField
					helperText='helper text'
					id='intro'
					label='Play with me'
					meta='meta'
					unit='unit'
				/>
			))}
		</Wrapper>
	)
}
