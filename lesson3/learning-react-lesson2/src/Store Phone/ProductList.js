import React from "react";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
    const {products,onPhoneSelect,title,onAddToCart}=props;
    return (
        <>
            <h3 className="mt-4 mb-2 text-success">{title}</h3>
            <div className="row">
                {products&&
                    products.map((product,index)=>{
                        return(
                            <div className="col-4" key={index}>
                                <ProductItem product={product}
                                             onPhoneSelect={onPhoneSelect}
                                             onAddToCart={onAddToCart} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
export default ProductList;
