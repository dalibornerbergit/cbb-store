import { useState } from "react"
import { useForm } from "react-hook-form"
import { customerServices } from "../../services/customerServices"
import Prompt from "../common/Prompt";

const CreateCustomer = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, errors } = useForm()

    const handleClose = () => setShow(false);

    const onSubmit = (data) => {
        customerServices.addCustomer(data)
            .then(() => {
                setShow(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="content">
            <Prompt title={"Success"} text={"Created new user"} url={"/customers"} show={show} handleClose={handleClose} />

            <h1>Create customer</h1>

            <div className="my-4">
                <form className="border p-4 rounded w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="firstName" placeholder="First Name" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="lastName" placeholder="Last Name" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="phone" placeholder="Phone" ref={register({
                            pattern: { value: /^[+0-9][0-9]*$/, message: "Invalid sign" },
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.email && <p>{errors.email.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="street" placeholder="Street" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.street && <p>{errors.street.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="city" placeholder="City" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.city && <p>{errors.city.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="state" placeholder="State" ref={register({
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.state && <p>{errors.state.message}</p>}

                    <div className="form-group">
                        <input className="form-control" type="text" name="zipCode" placeholder="Zip Code" ref={register({
                            pattern: { value: /^[0-9]*$/, message: "Invalid sign" },
                            required: { value: true, message: "Required" },
                            minLength: { value: 3, message: "Too short" },
                            maxLength: { value: 20, message: "Too long" }
                        })} />
                    </div>
                    {errors.zipCode && <p>{errors.zipCode.message}</p>}

                    <div className="form-group d-flex justify-content-center">
                        <input className="form-control text-light bg-primary w-50" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCustomer;