const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label className='input-field'>
            <input className='input-field__input' type="text" value={text} onChange={e => handleInput(e.target.value)}/>
            <button className='input-field__button' onClick={handleSubmit}>Add Todo</button>
        </label>
    );
};

export default InputField;