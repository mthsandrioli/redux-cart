export enum ActionsTypes {
  addProductoToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductoToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductoToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
