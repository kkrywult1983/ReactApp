//  import reactLogo from './assets/react.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
	return (
		<div>
			<h1>Hello motherfucker</h1>
			<ExpenseItem />
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
