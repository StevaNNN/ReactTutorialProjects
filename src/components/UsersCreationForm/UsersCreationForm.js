import React, { useState } from "react";

const UsersCreationForm = props => {

    // cmp states
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // cmp handlers
    const onNameChange = (e) => {
        setName(e.target.value)
    };
    const onAgeChange = (e) => {
        setAge(e.target.value)
    };
    const onUserCreateHandler = () => {
        const tempObj = { name: name, age: age }

        if([...age].includes("-")) {
            props.formInvalid('negative')
        } else if (name.trim().length > 0 && age.trim().length > 0) {
            props.createUser(tempObj);
            setName('');
            setAge('');
            props.formInvalid('success')
        } else {
            props.formInvalid('short')
        }
    }

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
                type="number"
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