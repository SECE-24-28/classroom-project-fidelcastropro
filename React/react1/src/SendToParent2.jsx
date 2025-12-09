import { useState } from "react";

function SendToParent2(props){
    const {receivefn} = props
    const [txtvalue , setTxtValue] = useState("")
    return (
        <>
            <h1>Sending from Parent 2</h1>
            <input type="text" value={txtvalue} id="txtbox" onChange={(e) => {setTxtValue(e.target.value); console.log(e.target.value)}}/> {/*value = {txtvalue} is very important attribute which gives the control of this rendered textbox to the React. If this attribute is missing, When we click "clear" , the value in the variable "txtvalue" is updated as the JS is linked with the chrome, But this txtbox is rendered by the React, so the UI is not updated when "clear" is clicked */}
            <button onClick={() => {receivefn(txtvalue)}}>Click this</button>
            <button onClick={() => setTxtValue("")}>Clear</button>
        </>
    )
}

export default SendToParent2
