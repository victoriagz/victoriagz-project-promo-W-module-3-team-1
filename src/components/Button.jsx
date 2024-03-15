import "../scss/components/Button.scss";

const Button = (props) => {
    return(
        <button className='button--large'>{props.textContent}</button>

    );
}

export default Button;