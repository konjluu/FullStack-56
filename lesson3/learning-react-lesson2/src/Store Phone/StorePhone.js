import React, {Component} from "react"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"

const productData=[
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
]

class StorePhone extends Component {
    state ={
        products:productData,
        selectPhone:null,
    }


    onPhoneSelect=(id)=>{
        const {products}=this.state;
        const selectPhone = products.find((phone)=>phone.id===id);
        this.setState({
            selectPhone : selectPhone,
        })
    }

    render(){
        const {products,selectPhone}=this.state;
        return(
            <div className="container">
                <h1>Store Phone</h1>
                <ProductList products={products} 
                             onPhoneSelect={this.onPhoneSelect} 
                             title="Danh sach san pham"/>
                <ProductDetail 
                             selectPhone={selectPhone} />
            </div>
        )
    }
}

export default StorePhone;