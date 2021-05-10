const Button = props => {

    return(
        <button
            {...props}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
export default Button;