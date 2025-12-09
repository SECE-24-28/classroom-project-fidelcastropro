import { useRef } from "react";

function SendToParent3(props){
    const txtvalue = useRef(null)
    const {receivefn} = props
    return (
        <>
            <input type="text" ref={txtvalue} id="txtbox" />
            <button onClick={() => receivefn(txtvalue.current.value)}>Click me</button>
        </>
    )
}

export default SendToParent3