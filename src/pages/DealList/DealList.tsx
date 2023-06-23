import { Chip, Tabs } from '@equinor/eds-core-react'
import Datatable from './Datatable'
import Filters from './Filters'

export default function DealList() {
	// fatt data
	return (
		<div>
			<Chip>Play with me</Chip>

			<Tabs>
				<Tabs.List>
					<Tabs.Tab>One</Tabs.Tab>
					<Tabs.Tab>Two</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panels>
					<Tabs.Panel>Panel one</Tabs.Panel>
					<Tabs.Panel>Panel two</Tabs.Panel>
				</Tabs.Panels>
			</Tabs>
			<Filters />
			<Datatable />
		</div>
	)
}
