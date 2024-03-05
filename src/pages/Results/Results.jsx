import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../API/endPoints'
import ProductCard from '../../components/Product/ProductCard'

function Results() {
    const [results, setResults] = useState([])
    const {catagoryName} = useParams()
    useEffect(() => {
        axios.get(`${productUrl}/products/category/${catagoryName}`)
    .then((res) => {
        setResults(res.data)
    }).catch((err) => {
        console.log(err)
    })
    }, [])
  return (
    <LayOut>
        <section>
            <h1 style={{padding:"30px"}}>Results</h1>
            <p >Catagory/ {catagoryName}</p>
            <hr />
            <div className={classes.products_container}>
                {
                    results?.map((product) => (
                        <ProductCard 
                        key = {product.id}
                        product = {product}
                        />
                    ))
                }

            </div>
        </section>
    </LayOut>
  )
}

export default Results