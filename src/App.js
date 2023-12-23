import { useState } from 'react'

import Inputs from './Inputs'
import Planner from './Planner'

const App = () => {
	const [planner, setPlanner] = useState(false)

	return (
		<div className='grid place-content-center h-screen w-screen font-mono text-center p-4'>
			<h1 className='font-semibold text-rose-300 text-3xl py-6'>Subject Planner</h1>
			<Inputs setPlanner={setPlanner} />
			<Planner setPlanner={setPlanner} />
		</div>
	)
}

export default App
