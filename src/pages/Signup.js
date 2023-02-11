import React from 'react'

import './Signup.css'

function Signup() {
  return (
    <div>
        <div class="container-sg">
            <h3>Sign Up</h3>
            <form action="/register" method="POST">
                <p><input type="text" name="username" placeholder="Enter a username" /></p>
                <p><input type="email" name="email" placeholder="Enter email ID" /></p>
                <p><input type="text" name="address" placeholder="Enter your address" /></p>
                <p><input type="password" name="password" placeholder="Enter a password" /></p>
                <p><button type="submit">Sign Up</button></p>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    </div>
  )
}

export default Signup