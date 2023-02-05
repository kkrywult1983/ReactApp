import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'
// STATE - useSTATE
function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title)

	const clickHandler = () => {
		setTitle('Updated!')
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>{props.ammount}zł</div>
			</div>
			<button onClick={clickHandler}>Change data</button>
		</Card>
	)
}

export default ExpenseItem
