import React from "react";
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const newExpense = (props) => {

    const saveExpenseDataHandler = (data) => {
        const tempObj = {
            ...data,
            id: Math.random().toString()
        }
        props.newData(tempObj)
    }

    return (
        <div className={'new-expense'}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default newExpense;