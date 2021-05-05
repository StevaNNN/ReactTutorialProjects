import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

    const [year, setYear] = useState('2022');

    const onYearSelectHandler = (data) => {
        setYear(data)
    }

    let filteredItems = props.items.filter(item => item.date.toLocaleString().includes(year));

    let allItems = filteredItems.length > 0 ? filteredItems.map((item, index) => {
        return(
            <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    }) : <h1 style={{color: '#fff'}}>There are no expenses in this year</h1>;

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter
                    selectedYear={year}
                    onYearSelect={onYearSelectHandler}
                />
                {allItems}
            </div>
        </Card>
    );
}

export default Expenses;
