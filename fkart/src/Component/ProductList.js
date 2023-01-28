//We use imr to imoort react it is a shortcut 
//In this component we use functional component 
//The shortcutr of this container is  rfc

import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
  return (
    props.productList.length >0?
   props.productList.map((product,i)=>{
          return <Product product={product} key={i} increase={props.increase} index={i} decrease={props.decrease} remove={props.remove}/> 
   }) : <h1>No product Exists in the  cart</h1>
  )
}

