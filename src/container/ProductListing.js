import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import {setProducts} from "../redux/actions/productActions";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent:'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function ProductListing() {
    const dispatch = useDispatch();
    const [loader, setLaoder] = useState(false);
    const classes = useStyles();

    const fetchAllProducts=async()=>{
        const response= await axios
        .get('https://fakestoreapi.com/products')
        .catch((e)=>{ 
            console.log("error"+e);
        });
        console.log(response);
        dispatch(setProducts(response.data));
        setLaoder(true);
    }

    useEffect(
        () => {
        fetchAllProducts() 
    });

    return (
        <div className="productListing">
            <div className="title">
                <p className="titleName">Product Listing</p>
            </div>
            <div className="row ProductComponentList">
                { loader?
                 <ProductComponent/> : 
                 <div className={classes.loader}>
                    <CircularProgress color="secondary" />
                 </div>
                }           
            </div>
        </div>
    )
}

export default ProductListing
