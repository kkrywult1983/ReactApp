import Card from '../UI/Card'
import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {
	// console.log('Expenses:', props)
	const [changeDate, setChangeDate] = useState('2020')

	const filterChangeHandler = selectedYear => {
		setChangeDate(selectedYear)
	}
	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === changeDate
	})

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedDate={changeDate} onChangeDateFilter={filterChangeHandler} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
