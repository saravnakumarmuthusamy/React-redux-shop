import  ActionType  from "../constants/ActionType";

const setProducts=(data)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:data
    }
}

// const selectedProduct=(product)=>{
//     return {
//         type:ActionType.SELECTED_PRODUCT,
//         payload:product
//     }
// }

// const removeSelectedProduct=(product)=>{
//     return {
//         type:ActionType.REMOVE_SELECTED_PRODUCT,
//         payload:product
//     }
// }


export default setProducts;