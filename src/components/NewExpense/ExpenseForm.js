import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    /// ========= Multiple useState implementation ===== ///
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    /// ========= SINGLE useState implementation ===== ///
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })
    //
    // const titleChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     title: event.target.value,
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, title: event.target.value}
    //     })
    // }
    //
    // const amountChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     amount: event.target.value,
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, amount: event.target.value}
    //     })
    // }
    //
    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     date: event.target.value
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, date: event.target.value}
    //     })
    // }

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = { title: title, amount: amount, date: new Date(date) }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        min={0.01}
                        value={amount}
                        max={0.01}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        min={"2019-01-01"}
                        max={"2022-12-31"}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type={"submit"}>
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm;