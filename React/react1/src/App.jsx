import { useState } from 'react'
import Display from './Display'
import Display1 from './Display1'
import SendToParent from './SendToParent'
import SendToParent1 from './SendToParent1'
import SendToParent2 from './SendToParent2'
import SendToParent3 from './SendToParent3'
import RenderCount from './RenderCount'
import UseStateObj from './UseStateObj'


function App() {
  const name = "Fidel"
  const arr = [1,2,3,4,5]
  const person = {
    name: "Fidel",
    age: 20,
    gender: "Male"
  }
  function receivedata(data){
    console.log(`${data} : From the Child`)
  }
  return (
    <UseStateObj />
  )
}

export default App