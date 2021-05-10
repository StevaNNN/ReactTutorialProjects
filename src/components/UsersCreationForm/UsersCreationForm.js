import React, {useState} from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const UsersCreationForm = props => {

    const {name, setName} = useState('');
    const {age, setAge} = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onAgeChange = (e) => {
        setAge(e.target.value);
    }

    const onUserCreateHandler = () => {
        let tempObj = {
            name: name,
            age: age
        }
        props.createUser(tempObj)
    }

    console.log(age)
    console.log(name)

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: "300px"
        }}
        >
            <Input
                label={'Username'}
                onChange={onNameChange}
                value={name}
            />
            <Input
                label={"Age(year's)"}
                onChange={onAgeChange}
                value={age}
            />
            <Button
                onClick={onUserCreateHandler}
                style={{marginTop: '20px'}}
            >
                Add user
            </Button>
        </div>
    )
}

export default UsersCreationForm;