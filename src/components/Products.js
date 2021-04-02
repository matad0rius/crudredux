import React, { Fragment, useEffect } from "react";
import Product from "./Product";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductsActions } from "../actions/createNewProductAction";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    // check api
    const loadProducts = () => dispatch(getProductsActions());
    loadProducts();
    // eslint-disable-next-line
  }, []);

  // get state
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">List of products</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-3">
          There was an error
        </p>
      ) : null}

      {loading ? <p className="text-center">Loading...</p> : null}

      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "There is not products"
            : (products.map(product => (
                <Product key={product.id} product={product} />
              )))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Products;
