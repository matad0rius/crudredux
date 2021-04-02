import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNDLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCESS,
  DOWNLOAD_PRODUCTS_ERRROR,
  DOWNLOAD_PRODUCTS_ERROR,
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
