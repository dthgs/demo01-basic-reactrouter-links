import { TopBar, Typography, Icon, Switch } from '@equinor/eds-core-react'
import { apps } from '@equinor/eds-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deal from './pages/Deal/Deal'
import DealList from './pages/DealList/DealList'

Icon.add({ apps }) // needs only to be done once

function App() {
	return (
		<div className='App'>
			<TopBar>
				<TopBar.Header>
					<Icon name='apps' /> Application name - demo
				</TopBar.Header>
			</TopBar>
			<BrowserRouter>
				<div>
					{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
					<Routes>
						<Route path='/deal/:dealId' element={<Deal />} />
						<Route path='/' element={<DealList />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
