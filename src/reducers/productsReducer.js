import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNDLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCESS,
  PRODUCT_DELETE_ERROR,
} from "../types";

// each reducer has his own state

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_DOWNDLOAD_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case PRODUCT_DELETE_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload,
      };
    case PRODUCT_DELETE_SUCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };

    default:
      return state;
  }
}
