import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {

    const products = useSelector(state => state.allProducts.products);

    const renderProduct=products.map((product)=>{
        const { id,title,price,image } = product;
        return (
            <div className="productCol" key={id}>
                <div className="product_card">
                         <Link to={`/product/${id}`} >
                        <div className="product_image">
                            <img className="product_img" src={image} alt={title} />
                        </div>
                        <div className="product_content">
                            <div className="prodct_title"><p>{title}</p></div>
                        </div>
                        </Link>
                        <div className="prodct_price_cart row">
                           <div className="pricetag col">
                                <span className="">${price}</span></div>
                           <div className="addcart col"><button className="btn btn-primary">Add Cart</button></div>
                        </div>
            </div>
            </div>
            )
    });

   
    return (
        <>
            {renderProduct}
        </>
    )
}

export default ProductComponent;
