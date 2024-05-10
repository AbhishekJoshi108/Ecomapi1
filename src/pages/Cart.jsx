import React, { useContext } from 'react'
import { useCart } from '../context/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
  const{cart,cartitemcount,addtocart,removefromcart,increasequantity,decreasequantity}=useCart()
  return (
   <>
  <section class="h-100">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                    class="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  {
                    cart.map((item)=>(
                      <div class="row d-flex justify-content-between align-items-center">
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.Product.image}
                          class="img-fluid  shadow" alt="Cotton T-shirt"/>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <p class="lead fw-normal mb-2">{item.Product.title}</p>
                        <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button class="btn btn-link px-2"
                        onClick={()=>decreasequantity(item.Product.id)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
  
                        <input id="form1"  name="quantity" value={item.quantity} 
                          class="form-control form-control-sm" />
  
                        <button class="btn btn-link px-2"
                          onClick={()=>increasequantity(item.Product.id)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      {/* <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 class="mb-0">$ {round(item.product.price*item.quantity,2)}</h5>
                      </div> */}
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <FontAwesomeIcon icon={faTrash} onClick={()=>removefromcart(item.Product.id)} />
                      </div>
                    </div>


                    ))

                  }

                </div>
              </div>

              
            </div>
          </div>
          </div>
      </section>
   </>
  )
}

export default Cart
