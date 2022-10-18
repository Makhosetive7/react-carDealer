import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import data from '../../components/Buy/Catalogue.json'

const ViewProduct = () => {

const [singleProduct, setsingleProduct] = useState([])
const {name} = useParams

useEffect(() => {

    const findProduct = () => {
        const newProduct = data.products.find((product) => product.name === name)
        setsingleProduct(newProduct)
        console.log(newProduct)
    }

    findProduct()
}, [name])






  return (
    <div>
        <img src={singleProduct.image} alt="" />
    </div>
  )
}

export default ViewProduct