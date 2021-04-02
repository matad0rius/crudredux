import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNDLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCESS,
  DOWNLOAD_PRODUCTS_ERRROR,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCESS,
  PRODUCT_DELETE_ERROR,
  GET_PRODUCT_EDIT,
  PRODUCT_EDIT_SUCESS,
  PRODUCT_EDIT_ERROR,
  START_EDIT_PRODUCT,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// create new products
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // add in the api
      await clientAxios.post("/products, product");

      // if all good  actu the state
      dispatch(addProductSucess(product));

      // Alert
      Swal.fire("Succes", "The product was added sucessfully", "sucess");
    } catch (error) {
      // if there is a proble change the state
      dispatch(addProductError(true));

      // alert error
      Swal.fire({
        icon: "error",
        title: "There was a problem",
        text: "There was a problem",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

// if the product is saved in the db
const addProductSucess = (product) => ({
  type: ADD_PRODUCT_SUCESS,
  payload: product,
});

// error ?
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

// functios that download the products from the db
export function getProductsActions() {
  return async (dispatch) => {
    dispatch(downloadProducts());

    try {
      const answer = await clientAxios.get("/products");
      dispatch(downloadProductsSucess(answer.data));
    } catch (error) {
      dispatch(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: START_DOWNDLOAD_PRODUCTS,
  payload: true,
});

const downloadProductsSucess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCESS,
  payload: products,
});

const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

// Select and delete the product
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete);

    try {
      await clientAxios.delete(`/products/${id}`);
      dispatch(deleteProductSucess());

      // if is deleted show alert
      Swal.fire("Deleted", "Your file has been deleted", "success");
    } catch (error) {
      dispatch(deleteProductError());
    }
  };
}

const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const deleteProductSucess = () => ({
  type: PRODUCT_DELETE_SUCESS,
});

const deleteProductError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});

// product on edition
export function getProductEdit(product) {
  return (dispatch) => {
    dispatch(getProductEditAction(product));
  };
}

const getProductEditAction = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product,
});

// edit in the api
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct(product));

    try {
      await clientAxios.put(`/products/{product.id}`, product);
      dispatch(editProductSucess(product));
    } catch (error) {}
  };
}

const editProduct = () => ({
  type: START_EDIT_PRODUCT,
});

const editProductSucess = (product) => ({
  type: PRODUCT_EDIT_SUCESS,
  payload: product,
});
