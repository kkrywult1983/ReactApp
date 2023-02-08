import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
	const [enteredTitle, setEneteredTitle] = useState('')
	const [enteredAmount, setEneteredAmount] = useState('')
	const [enteredDate, setEneteredDate] = useState('')

	// const [userInput, setUserInput] = useState({
	// 	eneteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// })

	const titleChangeHandler = event => {
		setEneteredTitle(event.target.value)

		// Najlepsze podejście jesli chcemy updeteować poprzedni stan.
		// Jest również najbezpieczniejsza jeśli chcemy mieć pewnośc rerenderingu poprzedniego snapshota
		// setUserInput(prevState => {
		// 	return { ...prevState, enteredTitle: event.target.value }
		// })
	}

	const amountChangeHandler = event => {
		setEneteredAmount(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	eneteredAmmount: event.target.value,
		// })
	}
	const dateChangeHandler = event => {
		setEneteredDate(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	eneteredDate: event.target.value,
		// })
	}

	const submitHandler = event => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		}

		props.onSaveExpenseData(expenseData) // wywołanie funkcji rodzica - komunikacja w górę.
		setEneteredTitle('')
		setEneteredAmount('')
		setEneteredDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__controls'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__controls'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__controls'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
