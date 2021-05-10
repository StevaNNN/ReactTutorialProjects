import React, {useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {

    const [year, setYear] = useState('2022');
    const onYearSelectHandler = (data) => setYear(data);
    const filteredItems = props.items && props.items.filter(item => item.date.getFullYear().toString() === year);

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter
                    selectedYear={year}
                    onYearSelect={onYearSelectHandler}
                />
                <ExpensesChart
                    expenses={filteredItems}
                />
                <ExpensesList
                    items={filteredItems}
                />
            </div>
        </Card>
    );
}

export default Expenses;
