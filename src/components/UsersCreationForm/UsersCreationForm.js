import React, { useState } from "react";

const UsersCreationForm = props => {

    // cmp states
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // cmp handlers
    const onNameChange = (e) => {
        // if(e.target.value.trim().length === 0) {
        //     return;
        // }
        setName(e.target.value)
    };
    const onAgeChange = (e) => {
        // if(e.target.value.trim().length === 0) {
        //     return;
        // }
        setAge(e.target.value)
    };
    const onUserCreateHandler = () => {
        const tempObj = { name: name, age: age }
        props.createUser(tempObj);
        setName('');
        setAge('');
    }

    console.log(age);
    console.log(name);

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: "300px"
        }}
        >
            <label htmlFor={"name"}>
                Username
            </label>
            <input
                onChange={onNameChange}
                value={name}
                type={"text"}
                id={"name"}
            />
            <label htmlFor="age">
                Age(year's)
            </label>
            <input
                onChange={onAgeChange}
                value={age}
                type={"text"}
                id={"age"}
            />
            <button
                onClick={onUserCreateHandler}
                style={{marginTop: '20px'}}
            >
                Add user
            </button>
        </div>
    )
}

export default UsersCreationForm;