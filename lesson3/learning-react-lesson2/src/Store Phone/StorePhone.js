import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

const productData = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: "img/samsung.jpeg",
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone12",
    price: "200306000",
    img: "img/iphone.jpeg",
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: "img/oppo.jpeg",
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];

const findProductItemList= (id,products)=>{
  const SelectedProduct=products.find((product)=> product.id===id);
  return SelectedProduct;
}

class StorePhone extends Component {
  state = {
    products: productData,
    selectedPhone: null,
    cart: [],
  };


  onPhoneSelect = (id) => {
    const { products } = this.state;
    const selectedPhone = findProductItemList(id,products);
    this.setState({
      selectedPhone: selectedPhone,
    });
  };

  onAddToCart=(id)=>{
    const {cart}=this.state;
    const selectedPhone = findProductItemList(id,this.state.products);

    const indxCart=this.state.cart.findIndex((CartItem)=>CartItem.id===id);

    if(indxCart!== -1){
      cart[indxCart].amount += 1;
      this.setState({
        cart:cart,
      })
    }else{
      selectedPhone.amount=1;
      this.setState({
        cart:[...cart,selectedPhone],
      })
    }

  }

  onChangeAmount=(id,value)=>{
    const {cart}=this.state;
    const indxItemCart=cart.findIndex((cartItem)=> cartItem.id===id);
    cart[indxItemCart]['amount']+=value;
    this.setState({
      cart:cart,
    });

  }

  render() {
    const { products, selectedPhone, cart } = this.state;
    const CartSize = cart.length;
    return (
      <div className="container">
        <h1>The Gioi Di Dong</h1>
        <div className="d-flex justify-content-end">
          <span
            className="text-danger"
            style={{
              cursor: "pointer",
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Giỏ hàng ({CartSize})
          </span>
        </div>
        <ProductList
          products={products}
          onPhoneSelect={this.onPhoneSelect}
          title="Danh sach san pham"
          onAddToCart={this.onAddToCart}
          
        />
        <ProductDetail selectPhone={selectedPhone} />
        < Cart cart={cart}
              onChangeAmount={this.onChangeAmount}      
        />
      </div>
    );
  }
}

export default StorePhone;

/*
  ------------------------
  -----COMPONENT TREE-----
  ------------------------
  SmartPhoneStore
      Gio hang - button (so luong)
      ProductList
          ProductItem
          ProductItem
          ProductItem
          ProductItem
          ....
      ProductDetail
      Cart
*/

// Set State: cơ chế merging
// useState: replacing
// SEO = Search Engine Optimization
// State structure, split component
// Data binding, event handling, conditional rendering
// CRUD - Create, Read, Update ,DELETE

// Remove duplicate element in list
// [1,2,4,5,6], k=10