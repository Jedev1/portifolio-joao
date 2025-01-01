import React from 'react';
import NoprojectBG from '../../assets/no-project-preview.gif'
import { BiLinkExternal } from "react-icons/bi";

const CardProjeto = ({ nome, descricao, imagem, link }) => {
  return (
    <div className="card-project">
        <img src={imagem || NoprojectBG} alt="" />
        <div className="infos-project">
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <a href={link} target='_blank'><BiLinkExternal className='link-icon'/></a>
        </div>
    </div>
  );
};

export default CardProjeto;