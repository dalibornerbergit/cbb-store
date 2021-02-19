import { useEffect, useState } from "react";
import { customerServices } from "../../services/customerServices";
import Prompt from "../common/Prompt";
import { CustomerForm } from "./CustomerForm";

const UpdateCustomer = (props) => {
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleSuccess = () => setShow(true)

    useEffect(() => {
        customerServices.getSingleCustomer(props.match.params.id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => err)
    }, [])

    return (
        <div className="content">
            <Prompt title={"Success"} text={"Edited user"} show={show} handleClose={handleClose} url="/customers" />

            <h1>Edit customer</h1>

            <div className="my-4">
                {data ? <CustomerForm preloadedValues={data} handleSuccess={handleSuccess} /> : <div>Loading...</div>}
            </div>
        </div>
    );
}

export default UpdateCustomer;