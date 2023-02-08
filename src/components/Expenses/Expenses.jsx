import Card from '../UI/Card'
import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

function Expenses(props) {
	// console.log('Expenses:', props)
	const [changeDate, setChangeDate] = useState('2020')

	console.log({ setChangeDate })

	const filterChangeHandler = selectedYear => {
		// console.log('SelectedYear:', selectedYear)
		setChangeDate(selectedYear)
	}
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedDate={changeDate} onChangeDateFilter={filterChangeHandler} />
				<ExpenseItem title={props.items[0].title} ammount={props.items[0].amount} date={props.items[0].date} />
				<ExpenseItem title={props.items[1].title} ammount={props.items[1].amount} date={props.items[1].date} />
				<ExpenseItem title={props.items[2].title} ammount={props.items[2].amount} date={props.items[2].date} />
				<ExpenseItem title={props.items[3].title} ammount={props.items[3].amount} date={props.items[3].date} />
			</Card>
		</div>
	)
}
export default Expenses
