import React, { useEffect, useState } from 'react'
import './Women.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Women = () => {

  const[data,setdata]=useState([]);

  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products/category/women's clothing")
     .then((res)=>{
         console.log(res.data)
         setdata(res.data)
     }).catch((err)=>{
      console.log(err)
     })
 },[])
  


  return (
   <>
   <div className="container-fluid">
    <div className="row">
        <div className="banner-1">
            
        </div>
    </div>
   </div>

   <div className="container">
    <div className="row">
      
        {
          
          data.map((item)=>(
            <div className="col-md-4"  key={item.id}>
            <div className="card shadow mt-5 card-1">
              <img src={item.image} alt="" className='img-fluid' />
             <Link to={`/womensclothing/${item.id}`} ><h4 className='fs-5'>{item.title.slice(0,50)}...</h4></Link>

            </div>
            </div>
          ))
         
        }

    
    </div>
   </div>
   
   </>
  )
}

export default Women
