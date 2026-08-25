import axios from "axios";
import { createContext} from "react";



export let CartContext=createContext()


export default function CartContextProvider(props){

let headers={
    token: localStorage.getItem('userToken')
}

function updateCartItem(productId, count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        count: count        
    },
{  headers
}           
).then((response)=>response
).catch((err)=>err)
}

function removeCartItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers: headers
    } ).then((response)=>response
    ).catch((err)=>err)
}


function getCartProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers: headers
    } ).then((response)=>response
    ).catch((err)=>err)
}   

function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
        productId: productId,       
    },
{  headers
}

).then((response)=>response
//     {if(response.data.status==='success'){
//     alert('Product added to cart successfully')
//   }else{
//     alert('Failed to add product to cart')
//   }
//    console.log(response)
    
 )
.catch((err)=>err)

}


function checkout(cartId,url,formValue){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}?url=${url}`,{
        shippingAddress: formValue
    },
{  headers
}

).then((response)=>response
)

.catch((err)=>err)

}



     return <CartContext.Provider value={{addToCart, getCartProducts, removeCartItem, updateCartItem,checkout}}>
    
    {props.children}
        </CartContext.Provider>
}