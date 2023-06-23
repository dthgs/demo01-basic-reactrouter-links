import { Typography } from '@equinor/eds-core-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import DealButtons from './DealButtons'
import ContractualTradeInfo from './DealInfo/ContractualTradeInfo'
import Delivery from './DealInfo/Delivery'
import Pricing from './DealInfo/Pricing'
import Operation from './DealInfo/Operation'
import LabData from './DealInfo/LabData'

const Wrapper = styled.div`
	margin: 32px;
`

const DealDataWrapper = styled.div`

`

async function getAlbum(albumId: string | undefined) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/albums/${albumId}`
	)
	if (!res.ok) throw new Error('failed to fetch albums')
	return res.json()
}

export default function Deal() {
	const { dealId } = useParams<{ dealId: string }>()
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const albumData = getAlbum(dealId?.toString())
			const album = await albumData
			console.log('album', album)
			setData(album)
		}
		fetchData()
	}, [dealId])

	return (
		<Wrapper>
			<Typography variant='h1'>Deal {dealId}</Typography>
			<DealButtons />
            <DealDataWrapper>
                <ContractualTradeInfo />
                <Delivery />
                <Pricing />
                <Operation />
                <LabData />
            </DealDataWrapper>
		</Wrapper>
	)
}
