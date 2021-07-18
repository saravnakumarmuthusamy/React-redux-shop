import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {selectedProduct} from "../redux/actions/productActions";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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


const ProductDetails = () => {
    const [loader,setLoader] = useState(false);
    const classes = useStyles();

    const {productId}=useParams();
    const {id,image,title,price,description,category} = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const fetchProducts=async()=>{
        const response= await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((e)=>{ 
            console.log("error"+e);
        });
        console.log(response.data);
        dispatch(selectedProduct(response.data));
       setLoader(true);
    }

    useEffect(() => {
            fetchProducts();
        
    },[productId]);

    return (
        <div className="product_details">
            <div className="product_detail_title">
            <Link to="/" className="brHome"> Home</Link>
                <span className="brCurrent">  / Product Details</span>
            </div>
            {loader ? 
            <div className="productCard" key={id}>
                <div className="row productCardRow" >
                    <div className="col-md-6 productInfoImagCol ">
                        <img src={image} alt={title} className="productInfoImage" />
                    </div>
                    <div className="col-md-6 productInfoCol">
                        <div className="productInfoTitle">
                            <p className="prodInfoTitle">{title}</p>
                        </div>
                        <div className="productInfoCat">
                            <p className="">{category}</p>
                        </div>
                        <div className="productInfoDesc">
                            <p className="">{description}</p>
                        </div>
                        <div className="productInfoPrice">
                            <p className="">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <div className={classes.loader}>
                    <CircularProgress color="secondary" />
             </div>
            }    
        </div>
    )
}

export default ProductDetails
