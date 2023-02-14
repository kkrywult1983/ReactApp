//  import reactLogo from './assets/react.svg'

import './App.css'
import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import './components/UI/Card'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
]

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses]
		})
	}

	return (
		<div>
			<h1>Hello Motherfucker</h1>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App

// class Person {
// 	constructor(name) {
// 		this.name = name
// 	}
// 	call = name => {
// 		console.log(this.name)
// 	}
// }

// const myPerson = new Person('Kamil')

// myPerson.call()

// const array = [1, 2, 3]
// const [num1, , num3] = array
// console.log(num1, num3)

// const person = {
// 	name: 'Max',
// }

// const secondPerson = {
// 	...person,
// }

// person.name = 'Kamil'

// console.log(person)
// console.log(secondPerson)
// function transformToObjects(a, b, c) {
// 	const array = [a, b, c]

// 	const newArray = array.map(num => {
// 		return `{val:${num}}`
// 	})
// 	return newArray
// }

// transformToObjects(1, 2, 3)
