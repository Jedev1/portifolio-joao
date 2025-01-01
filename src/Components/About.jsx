import React from 'react'
import Profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
        <h2 className="section-text">Sobre Mim</h2>

        <div className="container">
            <div className="image-profile">
                <img src={Profile} alt="Profile" />
            </div>
            <div className="info-about">
                <h1 className='title'>Sobre Mim</h1>
                <p className="text">Opa e aí, tudo bem? Eu sou o João, desenvolvedor Front-end eficiente por criar interfaces que proporcionem experiências marcantes e intuitivas para os usuários. Meu foco é transformar ideias em soluções visuais e funcionais para jogos, aplicativos e sites.<br />
                <br/>
                Tenho sólida experiência em tecnologias como HTML, CSS, SASS, ReactJS, GDscript, Javascript, Lua e Python, além de estar sempre atualizado com as melhores práticas e tendências do mercado. Também possuo habilidade em trabalhar com design responsivo, acessibilidade e otimização de desempenho, garantindo que os produtos sejam eficientes e acessíveis em qualquer dispositivo.</p>

                <a href="#" className="btn-CV">Ver Curriculo</a>
            </div>
        </div>
    </section>
  )
}

export default About