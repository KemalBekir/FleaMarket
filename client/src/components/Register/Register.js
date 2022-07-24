import React from 'react'

const Register = () => {
  return (
    <section className='register-section'>
      <form>
        <label>Username:</label>
        <input type="text" placeholder='Enter your Username'></input>
        <label>Email:</label>
        <input type="email" placeholder='Enter your Email'></input>
        <label>Password:</label>
        <input type="password" placeholder='Enter your Password'></input>
        <label>Tel:</label>
        <input type="number"></input>
      </form>
    </section>
  )
}

export default Register