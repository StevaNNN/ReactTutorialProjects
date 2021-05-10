const Input = props => {

    return(
        <>
            {props.label && <label htmlFor={props.id}>
                {props.label}
            </label>}
            <input
                id={props.id}
                type={props.type}
                onChange={props.onClick}
                disabled={props.disabled}
                value={props.value}
            />
        </>
    )
}

export default Input;