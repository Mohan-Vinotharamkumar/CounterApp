function InputField(props)
{
    return(
        <>
                <input type="number" placeholder='Counter Value' readOnly className='inputField' value={props.text}/>
        </>
    )
}

export default InputField;