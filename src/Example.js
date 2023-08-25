import React from 'react'
import App from './index'
import { useState } from 'react'
const Example = () => {
    const [msgVal,setMsgVal]=useState('')
  return (
    <div>
      <App userInfo='Nishanth' msg={msgVal}/>
      <input type='text' value={msgVal} onChange={(e)=>setMsgVal(e.target.value)}/>
    </div>
  )
}

export default Example
