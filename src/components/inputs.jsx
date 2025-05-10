
function Inputs({ tooltip,func,label }){

    return (
        <>
        <label data-toggle="tooltip" data-placement="left" title={tooltip}>{label}</label>
        <input type="number" onChange={(e) => func(e.target.value)}  name="" id="" />
        </>
    )
}



function Buttons({tooltip, text,onClick}){

    return (
        <>
        <button onClick={onClick} data-toggle="tooltip" data-placement="left" title={tooltip}>{text}</button>
        </>
    )
}

export {Buttons,Inputs};