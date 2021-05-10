import React, {useState} from 'react';
import UsersCreationForm from "./components/UsersCreationForm/UsersCreationForm";
import UsersList from "./components/UsersList/UsersList";

const App = () => {

  const [users, setUsers] = useState([{name: "Steva", age: 21}]);

  const createUser = (newUser) => {
      console.log(newUser)
  }

  return(
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <UsersCreationForm createUser={createUser}/>
        <UsersList users={users} />
      </div>
  )
}

export default App;
