import React from "react";
const ProductItem = (props) => {
  const { product, onPhoneSelect,onAddToCart } = props;
  const { name, img, id } = product;
  // const onPhoneSelectHandel = (phoneId) => {
  //   onPhoneSelect(phoneId);
  // };
  return (
    <div>
      <div className="card p-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Product Img" />
        <div className="card-body">
          <p className="card-text fw-bold">{name} </p>
          <div className="d-flex align-items-center justify-content-between">
            <button
              href="#"
              className="btn btn-primary"
              onClick={() => onPhoneSelect(id)}
            >
              Xem Chi Tiet
            </button>
            <button 
              className="btn btn-danger" 
              onClick={()=>onAddToCart(id)}>
              Them vao gio hang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
