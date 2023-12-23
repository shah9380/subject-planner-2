const Inputs = ({ setPlanner }) => {
	const addSubject = () => {
		const subject = document.getElementById('subject')
		const hours = document.getElementById('hours')

		if (!subject.value && !hours.value) {
			subject.classList.add('input-error')
			hours.classList.add('input-error')
		} else {
			subject.classList.remove('input-error')
			hours.classList.remove('input-error')
		}

		if (!subject.value) {
			subject.classList.add('input-error')
			return
		}

		if (!hours.value) {
			hours.classList.add('input-error')
			return
		}

		if (hours.value < 1 || hours.value > 12) {
			hours.classList.add('input-error')
			alert('Hours must be between 1 and 12')
			return
		}

		const planner = JSON.parse(localStorage.getItem('planner')) || []

		planner.push({
			subject: subject.value,
			hours: hours.value,
		})

		localStorage.setItem('planner', JSON.stringify(planner))
		subject.value = ''
		hours.value = ''

		setPlanner(true)
	}

	return (
		<div className='flex gap-4 mb-8 flex-wrap justify-center items-center'>
			<input
				type='text'
				id='subject'
				name='subject'
				className='input input-bordered w-full max-w-xs'
				placeholder='Enter Subject Name'
			/>
			<input
				type='number'
				inputMode='numeric'
				name='hours'
				id='hours'
				className='input input-bordered w-20'
				placeholder='HH'
				min={1}
				max={12}
			/>
			<button className='bg-amber-400 text-black p-2 rounded-sm' onClick={addSubject}>
				Add
			</button>
		</div>
	)
}

export default Inputs
