import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions Redux

import { createNewProductAction } from "../actions/createNewProductAction";
import { showAlert, hideAlertAction } from "../actions/alertActions";

function NewProduct({ history }) {
  //state of component
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  // use usedispatch -> creates a new function
  const dispatch = useDispatch();

  // Acces state store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  // call the action of productAction
  const addProduct = (product) => dispatch(createNewProductAction);

  // when user does submit
  const submitNewProduct = (e) => {
    e.preventDefault();

    // validate form
    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "All fields are mandatory",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlert(alert));
      return;
    }
    // check there is no error
    dispatch(hideAlertAction());

    // create new product
    addProduct({
      name,
      price,
    });

    // redirect
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>

            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}

            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Add
                </button>
              </div>
            </form>
            {loading ? <p>Loading...</p> : null}
            {error ? (
              <p className="alert alert-danger p2">Something went wrong</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
