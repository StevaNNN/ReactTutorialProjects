import React from "react";

const UserItem = props => {

    return(
        <div style={{display: 'flex'}}>
            <span>{props.name}</span>
            <span>({props.age} year's old)</span>
            <span style={{flex: '1'}}/>
            <button onClick={props.userDelete}>
                Delete user
            </button>
        </div>
    )
}

export default UserItem;