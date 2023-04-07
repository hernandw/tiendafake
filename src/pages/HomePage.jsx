import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Productos from './Productos'

const HomePage = () => {
const { dataProducts, setDataProducts} = useContext(MyContext)

  return (
    <div>
      <h1>Página de Productos</h1>


<div className='container mt-5'>
    <div className='row d-flex justify-content-between gap-5'>
{dataProducts.map(product => <Productos key={product.id} {...product} />)}
    </div>
</div>


    </div>
  )
}

export default HomePage
