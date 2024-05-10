import { createContext, useContext, useState } from "react";


const initialstate = {
    cart: [],
    cartitemcount: () => 0,
    addtocart: () => null,
    removefromcart: () => null,
    increasequantity: () => null,
    decreasequantity: () => null,
}

const Cartcontext = createContext(initialstate);

const useCart = () => useContext(Cartcontext);

const Cartprovider = ({ children }) => {
    const [cart, setcart] = useState(initialstate.cart);

    const cartitemcount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addtocart = (Product) => {
        const ProductIdx = cart.findIndex((item) => item.Product.id === Product.id)

        if(ProductIdx!== -1){
         increasequantity(Product.id)
        }else{
            setcart([...cart,{Product,quantity:1}])
        }
        alert("Item has been added")
    }
    const removefromcart=(id)=>{
        setcart(cart.filter((item)=>item.Product.id !== id))
    }

    const increasequantity=(id)=>{
        const copy=cart.slice()
        const ProductIdx=copy.findIndex((item)=>item.Product.id===id)
        if(ProductIdx!== -1){
            copy[ProductIdx].quantity += 1
            setcart(copy)
        }
    }
    const decreasequantity=(id)=>{
        const copy=cart.slice()
        const ProductIdx=copy.findIndex((item)=>item.Product.id===id)
        if(ProductIdx!== -1 && copy[ProductIdx].quantity>1){
            copy[ProductIdx].quantity -= 1
            setcart(copy)
        }
    }
    return (
        <Cartcontext.Provider
        value={{cart,cartitemcount,addtocart,removefromcart,increasequantity,decreasequantity}}
        >
            {children}
        </Cartcontext.Provider>
    )
}

export {useCart,Cartprovider}