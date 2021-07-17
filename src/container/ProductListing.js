import React,{useEffect} from 'react';
import axios from 'axios';

import ProductComponent from './ProductComponent';
import { useSelector , useDispatch } from 'react-redux';
import setProducts from "../redux/actions/productActions";

function ProductListing() {
   // const state = useSelector(state => state.state);
    const dispatch = useDispatch();

    const fetchAllProducts=async()=>{
        const response= await axios
        .get('https://fakestoreapi.com/products')
        .catch((e)=>{ 
            console.log("error"+e);
        });
        console.log(response);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    return (
        <div >
            <h1>Product Listing</h1>
            <div className="ui grid container">
            <ProductComponent/>
            </div>
           
        </div>
    )
}

export default ProductListing
