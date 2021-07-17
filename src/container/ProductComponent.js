import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {

    const products = useSelector(state => state.allProducts.products);

    const renderProduct=products.map((product)=>{
        const { id,title,price,catagory,image } = product;
        return (
            <div className="four wide column" key={id}>
                <Link path={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">{price}</div>
                            <div className="meta">{catagory}</div>
                        </div>
                    </div>
                </div>
            </Link>
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
