import React from "react";
import Button from "../../UI/Button/Button";

const UserItem = props => {

    return(
        <div style={{display: 'flex'}}>
            <span>{props.name}</span>
            <span>({props.age} year's old)</span>
            <span style={{flex: '1'}}/>
            <Button
                onClick={() => console.log('userClicked')}
            >
                Delete user
            </Button>
        </div>
    )
}

export default UserItem;