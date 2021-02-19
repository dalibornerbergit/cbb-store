import Prompt from "../common/Prompt";
import { useState, useEffect } from "react"
import { productServices } from "../../services/productServices";
import ProductForm from "./ProductForm";

const EditProduct = (props) => {
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSuccess = () => setShow(true)

    useEffect(() => {
        productServices.getSingleProduct(props.match.params.id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => err)
    }, [])

    return (
        <div className="content">
            <Prompt title={"Success"} text={"Edited product"} show={show} handleClose={handleClose} url="/products" />

            <h1>Edit product</h1>

            <div className="my-4">
                {data ? <ProductForm preloadedValues={data} handleSuccess={handleSuccess} /> : <div>Loading...</div>}
            </div>
        </div>
    );
}

export default EditProduct;