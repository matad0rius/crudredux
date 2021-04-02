import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/createNewProductAction';

function Product({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();

  // Confirm if you want to delete it
  const confirmDeleteProduct = id => {
    
    // ask the user
    Swal.fire({
        title: 'Are you sure?',
        text: "You cant recover a deleted product",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.value) {
            // move it to the client
            dispatch( deleteProductAction(id) );
        }
    });
}

  return (
    <tr>
      <td>{name}</td>
      <td>
    <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Edit
        </Link>
        <button type="button" className="btn btn-danger" onClick={() => confirmDeleteProduct(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;
