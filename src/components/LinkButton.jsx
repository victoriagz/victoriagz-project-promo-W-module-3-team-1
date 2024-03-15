import "../scss/components/LinkButton.scss";
const LinkButton = (props) => {
    return(
        <a className='button--link' href='./'>{props.textContent}</a>
    );
    
}

export default LinkButton;