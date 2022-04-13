import React from "react";
const ProductDetail = (props) => {
  const { selectPhone } = props;
  if (!selectPhone) {
    return <h4>Chưa có dữ liệu</h4>;
  }
  const {
    name,
    img,
    ram,
    rom,
    info: { screen, os, frontCamera, backCamera },
  } = selectPhone;
  return (
    <div className="row mt-4">
      <div className="col-4 card">
        <h5>{name}</h5>
        <img src={img} alt={name} className="card-img-top" />
      </div>
      <div className="col-8">
        <div className="table">
          <table>
            <thead>
              <tr colSpan="2">
                <th>
                  <h3>Thông số kỹ thuật</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{backCamera}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
