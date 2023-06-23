import { Table, Typography } from '@equinor/eds-core-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
`

async function getAlbums() {
	const res = await fetch('https://jsonplaceholder.typicode.com/albums')
	if (!res.ok) throw new Error('failed to fetch albums')
	return res.json()
}

export default function Datatable() {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const albumData = getAlbums()
			const albums = await albumData
			console.log('albums', albums)
			setData(albums)
		}
		fetchData()
	}, [])

	return (
		<Wrapper>
			<Table style={{ width: '100%' }}>
				<Table.Caption>
					<Typography style={{ marginBottom: '16px' }} variant='h2'>Fruits cost price</Typography>
				</Table.Caption>
				<Table.Head>
					<Table.Row>
						<Table.Cell>UserId</Table.Cell>
						<Table.Cell>Id</Table.Cell>
						<Table.Cell>Title</Table.Cell>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					{data?.map((data: any) => {
						return (
							<Table.Row>
								<Table.Cell><Link to={`deal/${data.id}`}>{data.userId}</Link></Table.Cell>
								<Table.Cell>{data.id}</Table.Cell>
								<Table.Cell>{data.title}</Table.Cell>
							</Table.Row>
						)
					})}
				</Table.Body>
			</Table>
		</Wrapper>
	)
}
