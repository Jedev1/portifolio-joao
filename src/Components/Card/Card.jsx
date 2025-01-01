import React from 'react'
import "../../scss/index.css"

const Card = (props) => {
  return (
    <div className='card'>
        <h1 className="title"><span>{props.icon}</span>{props.name}</h1>
        <p className="description">{props.description}</p>
    </div>
  )
}

export default Card