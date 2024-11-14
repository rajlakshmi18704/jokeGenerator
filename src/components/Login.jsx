import React from 'react'

function Login() {
  return (
    <div style={{display:"flex",
        flexDirection:"column",
        width:"105px"

    }}>
      <input placeholder=' Enter your Email'/>
      <input placeholder='Enter Your Password'/>
      <p>Don't have an account<span>Sign up </span></p>
      <button>Submit</button>
    </div>
  )
}

export default Login
