import { FaTrash } from 'react-icons/fa'

const Planner = ({ setPlanner }) => {
	const subjects = JSON.parse(localStorage.getItem('planner'))
	setPlanner(false)

	const increaseValue = (index) => () => {
		if (subjects[index].hours === 12) {
			return
		}
		subjects[index].hours++
		localStorage.setItem('planner', JSON.stringify(subjects))
		setPlanner(true)
	}

	const decreaseValue = (index) => () => {
		if (subjects[index].hours === 1) {
			return
		}

		subjects[index].hours--
		localStorage.setItem('planner', JSON.stringify(subjects))
		setPlanner(true)
	}

	const deleteSubject = (index) => () => {
		subjects.splice(index, 1)
		localStorage.setItem('planner', JSON.stringify(subjects))
		setPlanner(true)
	}

	return (
		<div id='planner' className='lg:h-[60vh] overflow-y-scroll'>
			<div className='overflow-x-auto'>
				<table className='table text-lg text-center'>
					<thead>
						<tr>
							<th>Subject Name</th>
							<th>Hours</th>
						</tr>
					</thead>
					<tbody>
						{subjects?.map((subject, index) => (
							<tr key={index}>
								<td>{subject.subject}</td>
								<td className='flex justify-center'>
									<button
										className='btn btn-sm btn-error mr-2'
										onClick={decreaseValue(index)}
									>
										-
									</button>
									<p className='inline-block w-8'>{subject.hours}</p>
									<button
										className='btn btn-sm btn-success mx-2'
										onClick={increaseValue(index)}
									>
										+
									</button>
									<button
										className='btn btn-sm btn-error'
										onClick={deleteSubject(index)}
									>
										<FaTrash />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Planner
