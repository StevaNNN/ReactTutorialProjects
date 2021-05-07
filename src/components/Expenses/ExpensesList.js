import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    let allItems;
    allItems = props.items.length > 0 ? props.items.map((item, index) => {
        return(
            <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    }) : <h1 className={'expenses-list__fallback'}>There are no expenses in this year</h1>;

    // console.log(props)

    return(
        <ul className={'expenses-list'}>
            {allItems}
        </ul>
    )
}

export default ExpensesList;