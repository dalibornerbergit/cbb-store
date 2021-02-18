import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { productServices } from "../../services/productServices"
import { brandServices } from "../../services/brandServices"
import Prompt from "../common/Prompt";
import { categoryServices } from "../../services/categoryServices";

const CreateProduct = () => {
    const [show, setShow] = useState(false);
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const { register, handleSubmit, errors } = useForm()

    const handleClose = () => setShow(false);

    const onSubmit = (data) => {
        productServices.addProduct(data)
            .then(() => {
                setShow(true)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        brandServices.getBrands()
            .then(res => {
                setBrands(res.data)
            }).catch(err => err)

        categoryServices.getCategories()
            .then(res => {
                setCategories(res.data)
            }).catch(err => err)
    }, [])

    return (
        <div className="content">
            <Prompt title={"Success"} text={"Created new product"} url={"/products"} show={show} handleClose={handleClose} />

            <h1>Create product</h1>

            <div className="my-4">
                <form className="border p-4 rounded w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="productName" placeholder="Product name" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.productName && <p>{errors.productName.message}</p>}

                    <div className="form-group">
                        <select className="form-control" name="brandId" ref={register({
                            required: { value: true, message: "Required" },
                        })}>
                            {brands.map((brand) => (<option value={brand.brandId} key={brand.brandId}>{brand.brandName}</option>))}
                        </select>
                    </div>
                    {errors.brandId && <p>{errors.brandId.message}</p>}

                    <div className="form-group">
                        <select className="form-control" name="categoryId" ref={register({
                            required: { value: true, message: "Required" },
                        })}>
                            {categories.map((category) => (<option value={category.categoryId} key={category.categoryId}>{category.categoryName}</option>))}
                        </select>
                    </div>
                    {errors.categoryId && <p>{errors.categoryId.message}</p>}

                    <div className="form-group">
                        <select className="form-control" name="modelYear" ref={register({
                            required: { value: true, message: "Required" },
                        })}>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                        </select>
                    </div>
                    {errors.modelYear && <p>{errors.modelYear.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="number" name="listPrice" placeholder="List price" ref={register({
                            required: { value: true, message: "Required" },
                        })} />
                    </div>
                    {errors.listPrice && <p>{errors.listPrice.message}</p>}

                    <div className="form-group d-flex justify-content-center">
                        <input className="form-control bg-primary text-light w-50" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;