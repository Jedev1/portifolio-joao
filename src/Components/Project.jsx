import React, { useState } from 'react';
import CardProjeto from './Card/CardProject';
import NFTproject from "../assets/projeto-nft.png"
import Ophut from '../assets/op-hut-9.png'
import ResturantPreview from "../assets/restaurant-preview.png"

const projetos = [
  { id: 1, nome: 'NFT Preview', categoria: 'Front-end', descricao: 'Uma página única para apresentação de uma nft', imagem: NFTproject, link:"https://jedev1.github.io/NFT-preview/"},
  { id: 2, nome: 'Landing page de restaurante', categoria: 'Front-end', descricao: 'Landing page de um restaurante ficticio feito em ReactJS', imagem: ResturantPreview, link: "https://jedev1.github.io/Restaurant-landing-page/"},
  { id: 3, nome: 'Operação hut 9', categoria: 'Jogo', descricao:'Um jogo educaional para auxiliar no aprendizado de montagem e manutenção de computadores', imagem: Ophut, link: "https://github.com/Jedev1/Operacao-hut-9"},
  { id: 4, nome: 'Em breve...', categoria: 'App'},
];
  
const categorias = ['Todos', 'Front-end', 'Jogo', 'App'];

const Project = () => {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

    const handleCategoriaChange = (categoria) => {
      setCategoriaSelecionada(categoria);
    };
  
    const projetosFiltrados = projetos.filter((projeto) => {
      if (categoriaSelecionada === 'Todos') {
        return true;
      }
      return projeto.categoria === categoriaSelecionada;
    });

  return (
    <section className="projects" id='project'>
        <h2 className="section-text">Projetos</h2>
        <div className="container-project">
            <div className="filters">
                {/* Botões de filtro para cada categoria */}
                {categorias.map((categoria) => (
                    <button
                    key={categoria}
                    onClick={() => handleCategoriaChange(categoria)}
                    className={categoria === categoriaSelecionada ? 'active' : ''}
                    >
                    {categoria}
                    </button>
                ))}
            </div>
            <div className="cards-project">
                {projetosFiltrados.map((projeto) => (
                    <CardProjeto key={projeto.id} {...projeto} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project