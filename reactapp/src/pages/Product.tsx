import { PRODUCT_TITLE, SYSTEM_NAME } from "../config/constants"

const Product = () => {

    // Set title
    document.title =  PRODUCT_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Product</h1>
        </>
    )
}

export default Product
