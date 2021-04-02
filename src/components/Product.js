import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEdit } from "../actions/createNewProductAction";

function Product({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const history = useHistory();

  // Confirm if you want to delete it
  const confirmDeleteProduct = (id) => {
    // ask the user
    Swal.fire({
      title: "Are you sure?",
      text: "You cant recover a deleted product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        // move it to the client
        dispatch(deleteProductAction(id));
      }
    });
  };

  // function than redirect
  const redirectEdition = (product) => {
    dispatch(getProductEdit(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redirectEdition(product)}
          className="btn btn-primary mr-2"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;
