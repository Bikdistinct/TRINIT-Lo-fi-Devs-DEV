import React from 'react'
import Navbar from './Navbar'
import './Landing.css'

function Landing() {
  return (
    <div>
        <Navbar />
        <div class="container">
            <div class="left">
                <h1 id="msg">Welcome</h1>
                <p>"The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings." - Masanobu Fukuoka</p>
                <p><a href="#sec"><button>Explore</button></a></p>
            </div>
            <div class="right">
                <img src="http://unblast.com/wp-content/uploads/2020/05/Farming-Vector-Illustration.jpg" alt="" id="heroimg" />
            </div>
        </div>
    </div>
  )
}

export default Landing