import React, { useState } from "react";
import "./ProductTable.scss";
import { Delete, Edit, plus } from "../../../images/img";
import CreateProduct from "../../Forms/ProductForm /CreateProduct";
import EditProduct from "../../Forms/ProductForm /EditProduct";

const ProductTable = () => {
  const [prodForm, setProdForm] = useState(false);
  const [EditProd, setEditProd] = useState(false);

  return (
    <div className="prodcontainer">
      <table>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Commission</th>
          <th>Action</th>
        </tr>

        <tbody>
          <tr className="head">
            <td>1</td>
            <td>ETC</td>
            <td>$400</td>
            <td>$40</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditProd(!EditProd)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {EditProd ? <EditProduct /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>2</td>
            <td>ETC</td>
            <td>$400</td>
            <td>$40</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditProd(!EditProd)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {EditProd ? <EditProduct /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>3</td>
            <td>ETC</td>
            <td>$400</td>
            <td>$40</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditProd(!EditProd)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {EditProd ? <EditProduct /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>4</td>
            <td>ETC</td>
            <td>$400</td>
            <td>$40</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditProd(!EditProd)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {EditProd ? <EditProduct /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>
        </tbody>
      </table>

      <div>
        <div>
          <button className="pluss4" onClick={() => setProdForm(!prodForm)}>
            <img src={plus} className="plas" />
            <h2>Add Product</h2>
          </button>
          {prodForm ? <CreateProduct /> : false}
        </div>

        {/* <div>
          <button className="edit" onClick={() => setEditProd(!Editprod)}>
            <img src={Edit} />
            <h2>Edit Product</h2>
          </button>
          {Editprod ? <EditProduct /> : false}
        </div> */}
      </div>
    </div>
  );
};

export default ProductTable;
