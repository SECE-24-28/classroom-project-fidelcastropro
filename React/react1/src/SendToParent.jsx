function SendToParent(props){
    const {receivefn} = props
    var txtvalue = "Fidel"
    return (
        <>
            <h1>SendToParent</h1>
            <button onClick={() => receivefn(txtvalue)}>Click me</button>
        </>
    )
}

export default SendToParent