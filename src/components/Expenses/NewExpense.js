import React from "react";
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const newExpense = (props) => {

    const saveExpenseDataHandler = (data, value) => {
        const tempObj = {
            ...data,
            id: Math.random().toString()
        }
        props.newData(tempObj, value)
    }

    return (
        <div className={'new-expense'}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} opened={props.opened} cancel={props.cancel}/>
        </div>
    )
}

export default newExpense;