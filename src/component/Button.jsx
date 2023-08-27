
function Button(props)
{   
    function Addon()
    {
        props.onadd();
    }

    function Subon()
    {
        props.onsub();
    }
    
    return (
        <>
            <span className="buttonField">
                    <button className="btn_2" onClick={Subon}>-</button>
                    <button className="btn_1" onClick={Addon}>+</button>
             </span>
         </>
    )
}

export default Button;