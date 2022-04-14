const Cart = (props) => {
    const {cart,onChangeAmount}=props;
    const parseStringToCurrency=(value)=>{
        return value.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    }
    const cartBody=<table className="table">
        <thead>
            <tr>
                <th>Ma SP</th>
                <th>Ten SP</th>
                <th>Hinh anh</th>
                <th>So luong</th>
                <th>Don gia</th>
                <th>Thanh tien</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {cart&& 
                cart.map((cartItem)=>{
                    const {id,name,amount,price,img}=cartItem;
                    const priceTotal=price*amount;
                    const isDisabledMinusButton= amount===1;
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <img src={img} alt={name} style={{
                                  width:"32px",
                                  height:"auto",
                                  objectFit:"cover"
                                }} />
                            </td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick={()=>onChangeAmount(id,-1)}
                                        disabled={isDisabledMinusButton}
                                >
                                        -
                                </button>
                                <span  className="mx-1">{amount}</span>
                                <button className="btn btn-primary"
                                        onClick={()=>onChangeAmount(id,1)}>
                                        +
                                </button>
                            </td>
                            <td>{parseStringToCurrency(price)}</td>
                            <td>{parseStringToCurrency(priceTotal)}</td>
                            <td>
                                <i className="fa fa-trash text-danger"></i>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  return (
    <div 
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Gio Hang</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
              {cart.length===0 ? (<p>Chua co san pham</p>)
              : (cartBody)
              }
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
