import React from "react";
import UserItem from "./UserItem/UserItem";

const UsersList = (props) => {

    let render = !!props.users ? props.users.map((user, id) => {
        return(
            <UserItem
                key={id}
                name={user.name}
                age={user.age}
                id={id}
            />
        )
    }) : <h1>There are no currently users</h1>

    return(
        <div style={{
            width: '100%',
            maxWidth: "300px"
        }}>
            {render}
        </div>
    )
}

export default UsersList;