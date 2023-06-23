import { Button, Divider, Icon } from '@equinor/eds-core-react'
import styled from 'styled-components'
import { save } from '@equinor/eds-icons' // import "save" icon

Icon.add({ save }) // needs only to be done once

const Wrapper = styled.div``

const ButtonWrapper = styled.span`
	margin: 16px;
	display: inline-grid;
	grid-template-columns: auto auto;
	align-items: center;
`

export default function DealButtons() {
	return (
		<Wrapper>
			{[...Array(8)].map((x, i) => (
				<ButtonWrapper>
					<Icon data={save} color='rgba(0,112,121,1)' />
					<Button variant='ghost'>Export</Button>
				</ButtonWrapper>
			))}
            <Divider />
		</Wrapper>
	)
}
