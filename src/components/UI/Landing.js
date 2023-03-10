import {React, useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect"
import './Landing.css'

function Landing() {
  return (
    <div>
        <Navbar />
        <div class="container-landing">
            <div class="left">
                <h1 id="msg">
                  <Typewriter 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Welcome",
                      "to FarmStack."
                    ]
                  }} />
                </h1>
                <p id="quote">"The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings." - Masanobu Fukuoka</p>
                <p><Link to="/feed"><button>Explore</button></Link></p>
            </div>
            <div class="right">
                <img src={process.env.PUBLIC_URL + '/heroimg.png'} alt="" id="heroimg" />
            </div>
        </div>
    </div>
  )
}

export default Landing