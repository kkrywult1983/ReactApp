import './ExpenseItem.css'

function ExpenseItem() {
	const expenseDate = new Date(2023, 1, 3)
	const expenseTitle = 'Car Insurance'
	const expenseAmmount = 299

	return (
		<div className='expense-item'>
			<div>March 28th 2023</div>
			<div className='expense-item__description'>
				<h2>Car Insurance</h2>
				<div className='expense-item__price'>299 zł</div>
			</div>
		</div>
	)
}

export default ExpenseItem
