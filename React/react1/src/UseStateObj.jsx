import { useState } from "react";
function UseStateObj(){
    const [state,setstate] = useState({
        name : "Fidel",
        mobile : 6383631731,
        age : 20
    })
    const [namevar,setnamevar]= useState("");
    function changeName(){
        setstate({...state, name:namevar})
        console.log(state)
    }
   

    return(
        <>
        <h1>Name : {state.name}</h1>
        <h1>Mobile : {state.mobile}</h1>
        <h1>Age : {state.age}</h1>
        <input type="text" value={namevar} name="name" onChange={(e)=>{
            setnamevar(e.target.value)
        }}/>
        <br/>
        <button onClick={() => changeName()}>Change Name</button>
        </>
    )
}

export default UseStateObj