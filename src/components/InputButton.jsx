import "../scss/components/InputButton.scss";

const InputButton = (props) => {
    return(
        <>
            <label htmlFor='image' className='button'>{props.textContent}</label>
            <input
                className='addForm__hidden'
                type='file'
                name='image'
                id='image'
            />
      </>

    );
}

export default InputButton;