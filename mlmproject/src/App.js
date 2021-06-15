import React,{useState} from 'react'
import Axios from 'axios'

export default function App() {

  const [USERNAME, SETUSERNAME] = useState('')
  const [PASSWORD , SETPASSWORD] = useState('')

  const Login =()=>{
    Axios.post('http://localhost:8080/user/login',{
      Username:USERNAME,
      Password:PASSWORD
    }).then(res =>{
      console.log(res.data)
    })
    // console.log('clicked')
  }
  
  return (<div>
    <input
      type='text'
      placeholder='Username'
      onChange={(e)=>SETUSERNAME(e.target.value)}
    />
    <p>{USERNAME}</p>
    <input
      type='password'
      placeholder='password'
      onChange={(e)=>SETPASSWORD(e.target.value)}
    />
     <p>{PASSWORD}</p>
    <button onClick={()=> Login()}>
      Login
    </button>
  </div>)
}