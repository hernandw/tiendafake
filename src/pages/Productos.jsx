import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productos = ({id, price, title, image, description}) => {

    const navigate = useNavigate()

const HandleClick = ()=>{
    navigate(`product/${id}`)
}


  return (
    <>
        <div className="card" style={{width: "16rem"}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <button className='btn btn-primary' onClick={HandleClick}>Ver Mas</button>
  </div>
</div>
    </>
  )
}

export default Productos
