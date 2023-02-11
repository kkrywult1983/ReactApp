import React from 'react'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
import './NewExpense.css'

const NewExpense = props => {
	const [isEditing, setIsEditing] = useState(false)

	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			id: Math.random().toFixed(2).toString(),
			...enteredExpenseData,
		}

		// console.log('EnteredEsp:data:', expenseData)
		props.onAddExpense(expenseData)
		stopEditingHandler()
	}
	const stopEditingHandler = () => {
		setIsEditing(false)
	}

	const startEditingHandler = () => {
		setIsEditing(true)
	}

	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
		</div>
	)
}

export default NewExpense
