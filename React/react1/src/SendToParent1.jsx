import { useState } from "react";

function SendToParent1(props){
    const {receivefn} = props
    const [txtvalue , setTxtValue] = useState("")

    return (
        <>
            <h1>Send to Parent 1</h1>
            <input type="text" value={txtvalue} id="txtbox" onChange={(e) => setTxtValue(e.target.value)}/>
            <button onClick={() => {receivefn(txtvalue)}}>Click this</button>
        </>
    )
}

export default SendToParent1