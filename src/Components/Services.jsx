import React from 'react'
import Card from './Card/Card'

import { BiGame } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";

const Services = () => {

  const text = [
    { text: "Desenvolvedor front-end", 
      description: "Crio sites responsivos, modernos e com alto desempenho utilizando HTML, CSS, Javascript e ReactJS, garantindo uma experiência de usuário fluida e acessível. Tenho experiência em implementar designs criativos, integração com APIs e otimização para SEO e velocidade. Além disso, sigo estudando continuamente novas ferramentas, frameworks e práticas recomendadas, como SASS, TypeScript e Next.js, para me manter atualizado com as tendências e entregar soluções inovadoras e eficientes.", icon: <BiCodeAlt/> },
    { text: "Desenvolvedor de jogos", 
      description: "Desenvolvo jogos 2D utilizando Godot e Unity, criando experiências envolventes e cativantes para os jogadores. Tenho habilidade em design de gameplay, desenvolvimento de interfaces intuitivas, implementação de mecânicas dinâmicas e integração de sistemas. Além disso, me dedico a otimizar o desempenho dos jogos e a explorar novas técnicas, como shaders e animações complexas, para trazer vida e fluidez aos projetos. Continuo estudando e acompanhando as tendências da indústria para criar jogos inovadores e tecnicamente eficientes.", icon: <BiGame/> },
    { text: "Desenvolvedor de App", 
      description: "Desenvolvo aplicativos multiplataforma utilizando React Native e Kodular, criando soluções intuitivas e eficientes que atendem às necessidades dos usuários. Tenho experiência em design de interfaces modernas, integração com APIs, gerenciamento de estados e otimização de desempenho. Além disso, busco constantemente aprimorar meus conhecimentos sobre desenvolvimento mobile, explorando novas tecnologias e ferramentas para garantir a criação de aplicativos inovadores e de alta qualidade.",
      icon: <BiMobile/> }
  ];


  return (
    <section className="services">
        <h2 className="section-text">Serviços</h2>
        <div className="container">
          <div className="cards">
          {text.map((service, index) => (
            <Card key={index} icon={service.icon} name={service.text} description={service.description} />
          ))}
          </div>
          <p className="languages" align="center">
            <a href="https://github.com/Jedev1" target='_blank'>
              <img src="https://skillicons.dev/icons?i=git,github,vscode,html,css,sass,js,react,python,lua,godot,jest" />
            </a>
          </p>

          <p className="languages-mobile" align="center">
            <a href="https://github.com/Jedev1" target='_blank'>
              <img src="https://skillicons.dev/icons?i=git,github,vscode,html,css,sass,js,react,python,lua,godot,jest&perline=4" />
            </a>
          </p>
        </div>
    </section>
  )
}

export default Services