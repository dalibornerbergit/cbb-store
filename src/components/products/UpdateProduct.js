import {useEffect,useState} from "react"
import {productServices} from "../../services/productServices"
import { useForm } from "react-hook-form"

const UpdateProduct = (props)=>{
    let id = props.match.params.id;

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {}
    })

    const [products, setProducts]=useState([]);
    const [updatedProduct,  setUpdatedProduct]=useState({
        name:"",        
    })

useEffect(() => {
console.log("idprod",id);
productServices.getSingleProduct(id)
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => err)
}, [])

const submitUpdate =(id)=> {
    productServices.updateProduct(
id,
updatedProduct.name
    ).then((res)=> console.log(res)).catch((err)=>console.log(err))
}
return (
    <div>
        <form 
        //onSubmit={handleSubmit(submitUpdate)}
        >
        <input defaultValue={products.productName} 
        onChange={function (event) {
            console.log(event.target.value)
            setUpdatedProduct({...updatedProduct,name:event.target.value})
        }} />
        </form>
        
    </div>
)
}
export default UpdateProduct;