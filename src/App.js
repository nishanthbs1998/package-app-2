import { useState, useEffect } from "react"
function App({userInfo='defaultName', msg='Berlin'}) {
   const [responseMsg,setResponseMsg]=useState('')
    console.log('hi')
    useEffect(()=>{
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${msg}`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0bd217498msh8fc8b6c6e488d37p143f91jsn736af337e39b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function fetchInfo(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
    setResponseMsg(result)
	console.log(result);
} catch (error) {
	console.error(error);
}}
fetchInfo()
        //call api
    },[userInfo,msg])
  return (
    <div style={{height:500,width:300,overflow:'auto',backgroundColor:'pink'}}>
      <span>Hi {userInfo}, Whether in {msg} is {responseMsg?.current?.condition?.text}</span>

    </div>
  )
}

export default App;
