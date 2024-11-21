import products from "../data/products";

const ProductReducer = (state = products, action) => {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // here we can write logic to remove product

        case "ADD_PRODUCT":
            return [...state, action.product]; // Add Product logic is added

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
}

export default ProductReducer;