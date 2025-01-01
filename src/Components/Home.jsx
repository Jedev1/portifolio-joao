import React from 'react'
import Background from '../assets/background-home.gif'

const Home = () => {
  return (
    <main className='home' id='home'>
            <div className="image-bg">
                <img src={Background} alt="Background" />
            </div>
            <div className="infos">
                <h3 className="subtitle">Opa E aí, tudo bem?</h3>
                <h1 className='title'>Eu sou o João</h1>
                <div class="animated-text">
                    Sou um desenvolvedor <span></span>
                </div>
            </div>
    </main>
  )
}

export default Home