import React from 'react'
import './Login.css'

function login() {
  return (
    <div>
      <div class="container-lg">
        <h3>Login</h3>
        <form action="/login" method="POST">
            <p><input type="text" name="username" placeholder="Enter username" /></p>
            <p><input type="password" name="password" placeholder="Enter password" /></p>
            <p><button type="submit">Login</button></p>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
        </form>
          </div>
    </div>
  )
}

export default login