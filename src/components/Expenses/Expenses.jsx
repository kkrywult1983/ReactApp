import Card from '../UI/Card'
import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

function Expenses(props) {
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
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
