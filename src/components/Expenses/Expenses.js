import React, {useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import './Expenses.css';

const Expenses = (props) => {

    const [year, setYear] = useState('2022');

    const onYearSelectHandler = (data) => {
        setYear(data)
    }

    let filteredItems = props.items && props.items.filter(item => item.date.toLocaleString().includes(year));

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selectedYear={year} onYearSelect={onYearSelectHandler}/>
                <ExpensesList items={filteredItems} />
            </div>
        </Card>
    );
}

export default Expenses;
