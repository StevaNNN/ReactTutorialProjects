import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_EXPENSES = [
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
    date: new Date(2022, 5, 12),
  },
];

const App = () => {

  const [expensesList, setExpensesList] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (data) => {
    setExpensesList((preState) => {
      return [data, ...preState];
    })
  }

  return (
    <div>
      <NewExpense newData={addExpenseHandler}/>
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
