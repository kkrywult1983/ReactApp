import './ExpensesFilter.css'

const ExpensesFilter = props => {
	// console.log('FilterProps:', props)

	const submitDateHandler = event => {
		props.onChangeDateFilter(event.target.value)
		// console.log('FilterCompo:', event.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selectedDate} onChange={submitDateHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter
