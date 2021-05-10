import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import UsersCreationForm from "./components/UsersCreationForm/UsersCreationForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {

    const [users, setUsers] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [modalText, setModalText] = useState('');

    const createUser = (newUser) => {
        setUsers((prevState) => {
            return [...prevState, newUser]
        });
    }

    const formInvalid = (value) => {

        if(value === 'negative' || value === 'short') {
            setModalOpened(true);
        } else  {
            setModalOpened(false);
        }
        switch (value) {
            case 'short':
                return setModalText('Name text is to short');
            case 'negative':
                return setModalText("Age number is set to negative, that's not allowed");
            case 'success':
                break;
            default:
                break;
        }
    }

    const onUserDelete = (id) => {
        setUsers((prevState) => {
            prevState.splice(id, 1);
            return [...prevState];
        })
    }

    console.log(users)
    console.log(modalText)
    console.log(modalOpened)

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <UsersCreationForm createUser={createUser} formInvalid={formInvalid} />
            <UsersList users={users} onUserDelete={onUserDelete}/>
            {modalOpened ? ReactDOM.createPortal(<div>{modalText}</div>,document.body.querySelector('#root')) : null}
        </div>
    )
}

export default App;
