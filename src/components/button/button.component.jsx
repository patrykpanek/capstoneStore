import './button.styles.scss'

const BUTTON_TYP_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYP_CLASSES[buttonType]}`}>
            {children}
        </button>
    )
}

export default Button;