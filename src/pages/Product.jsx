import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/Product.css"
import { useCart } from '../context/cart';


const Product = () => {
    const { id } = useParams();
    const [Product, setproduct] = useState({});
    const{addtocart}=useCart()
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setproduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    },[])
    // const handlecart = (Product) => {
    //     console.log(Product);
    //     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //     const isproductexist = cart.find(item => item.id === Product.id)
    //     if (isproductexist) {
    //         const updatedcart = cart.map(item => {
    //             if (item.id === Product.id) {
    //                 return {
    //                     ...item,
    //                     quantity: item.quantity + 1
    //                 }
    //             }
    //             return item
    //         })
    //         localStorage.setItem('cart', JSON.stringify(updatedcart))

    //     } else {
    //         localStorage.setItem('cart', JSON.stringify([...cart, { ...Product, quantity: 1 }]))
    //     }
    //     alert("product has been added")

    // }

   
    return (
        <>
            <div className="container mt-5 imgleft">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <img src={Product.image} className='img-fluid shadow border' />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h2>{Product.title}</h2>
                        <h4 className='text-danger'>{Product.description}</h4>
                        <h6>Category: {Product.category}</h6>
                        <h2>${Product.price}</h2>
                        <button className='btn btn-danger' onClick={()=>addtocart(Product)}>Addtocart</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Product
