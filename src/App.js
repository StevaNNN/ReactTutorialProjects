import React, {useState} from 'react';
import UsersCreationForm from "./components/UsersCreationForm/UsersCreationForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {

    const [users, setUsers] = useState([]);

    const createUser = (newUser) => {
        setUsers((prevState) => {
            return [...prevState, newUser]
        })
    }
    const formInvalid = (value) => {
        console.log(value)
    }

    const onUserDelete = (id) => {
        setUsers((prevState) => {
            let test = prevState;
            test.splice(id)
            console.log(test)
        })
    }

    console.log(users)

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <UsersCreationForm createUser={createUser} formInvalid={formInvalid} />
            <UsersList users={users} onUserDelete={onUserDelete}/>
        </div>
    )
}

export default App;
