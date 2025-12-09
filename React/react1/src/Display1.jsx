// function Display1(){
//     function changeName(d){
//         console.log(`Name Changed : ${d}`)        
//     }
//     var name = "Haripriya Selvaraj"
//     console.log(`Name : ${name}`)
    
//     return(
//         <>
//           <h1>From Display1 without using useState Hooks</h1>
//           <h1>Name : {name}</h1>
//            <button onClick={() => changeName("Haripriya Fidel")}>Change Name</button>
//         </>
//     )
// }
//The above given version changes the variable "name" without using the useState hooks

import { useState } from "react"
function Display1(){
    const [name,setName] = useState("Fidel")
    console.log(`Name : ${name}`)
    return(
        <>
        <h1>From Display1 using useState Hooks</h1>
        <h1>Name : {name}</h1>
        <button onClick={() => setName("Haripriya Fidel")}>Change Name</button>
        </>
    )
}
export default Display1