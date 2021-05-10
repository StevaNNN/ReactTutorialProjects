import React, {useState} from 'react';
import NewExpense from './components/Expenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Expense1',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Expense2',
    amount: 200,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Expense3',
    amount: 300,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Expense4',
    amount: 400,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {

  const [formOpened, setFormOpened] = useState(false);
  const [expensesList, setExpensesList] = useState(INITIAL_EXPENSES);


  const cancelForm = (event, value) => {
    setFormOpened(value);
  }

  const addExpenseHandler = (data, value) => {
    setFormOpened(value);
    setExpensesList((prevState) => {
      return [data,...prevState];
    });
  }

  return (
    <div>
      <NewExpense
          newData={addExpenseHandler}
          opened={formOpened}
          cancel={cancelForm}
      />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
