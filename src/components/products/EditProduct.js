import Prompt from "../common/Prompt";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { productServices } from "../../services/productServices";
import { brandServices } from "../../services/brandServices";
import { categoryServices } from "../../services/categoryServices";
import Select from "react-select";

const EditProduct = (props) => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  //   const [options, setOptions] = useState([]);
  const { control, register, handleSubmit, reset, errors } = useForm({
    defaultValues: data,
  });

  const onSubmit = (data) => {
    productServices
      .updateProduct({
        productId: props.match.params.id,
        productName: data.productName,
        brandId: data.brandId.value ? data.brandId.value : data.brandId,
        categoryId: data.categoryId.value
          ? data.categoryId.value
          : data.categoryId,
        modelYear: data.modelYear,
        listPrice: data.listPrice,
      })
      .then(() => {
        handleSuccess();
      })
      .catch((err) => err);
  };

  const handleClose = () => setShow(false);
  const handleSuccess = () => setShow(true);

  useEffect(async () => {
    await productServices
      .getSingleProduct(props.match.params.id)
      .then((res) => {
        setData(res.data);
        reset(res.data);
      })
      .catch((err) => err);

    categoryServices
      .getCategories()
      .then((res) => {
        setCategories(
          res.data.map((category) => {
            return { value: category.categoryId, label: category.categoryName };
          })
        );
      })
      .catch((err) => err);

    brandServices
      .getBrands()
      .then((res) => {
        setBrands(
          res.data.map((brand) => {
            return { value: brand.brandId, label: brand.brandName };
          })
        );
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="content">
      <Prompt
        title={"Success"}
        text={"Edited product"}
        show={show}
        handleClose={handleClose}
        url="/products"
      />

      <h1>Edit product</h1>

      <div className="my-4">
        {data ? (
          <form
            className="border p-4 rounded w-75 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="productName"
                placeholder="Product name"
                ref={register({
                  required: { value: true, message: "Required" },
                  minLength: { value: 3, message: "Too short" },
                  maxLength: { value: 40, message: "Too long" },
                })}
              />
            </div>
            {errors.productName && <p>{errors.productName.message}</p>}

            <div className="form-group">
              {brands.length > 0 && (
                <Controller
                  control={control}
                  name="brandId"
                  render={({ onChange }) => (
                    <Select
                      defaultValue={brands.find(
                        (brand) => brand.value === data.brandId
                      )}
                      options={brands}
                      onChange={onChange}
                      ref={register({
                        required: { value: true, message: "Required" },
                      })}
                    />
                  )}
                />
              )}
            </div>

            {/* <div className="form-group">
                    <select value={data.brandId} className="form-control" name="brandId" ref={register({
                        required: { value: true, message: "Required" },
                    })}>
                        {brands.map((brand) => (<option value={brand.brandId} key={brand.brandId}>{brand.brandName}</option>))}
                    </select>
                </div> */}
            {errors.brandId && <p>{errors.brandId.message}</p>}

            <div className="form-group">
              {categories.length > 0 && (
                <Controller
                  control={control}
                  name="categoryId"
                  render={({ onChange }) => (
                    <Select
                      defaultValue={categories.find(
                        (category) => category.value === data.categoryId
                      )}
                      options={categories}
                      onChange={onChange}
                      ref={register({
                        required: { value: true, message: "Required" },
                      })}
                    />
                  )}
                />
              )}
            </div>
            {errors.categoryId && <p>{errors.categoryId.message}</p>}
            {/* <select
                value={data.categoryId}
                className="form-control"
                name="categoryId"
                ref={register({
                  required: { value: true, message: "Required" },
                })}
              >
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select> */}

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                min="1818"
                max={new Date().getFullYear() + 2}
                step="1"
                name="modelYear"
                ref={register({
                  required: { value: true, message: "Required" },
                })}
              ></input>
            </div>
            {errors.modelYear && <p>{errors.modelYear.message}</p>}

            <div className="form-group">
              <input
                className="form-control"
                type="number"
                step="any"
                name="listPrice"
                placeholder="List price"
                ref={register({
                  required: { value: true, message: "Required" },
                })}
              />
            </div>
            {errors.listPrice && <p>{errors.listPrice.message}</p>}

            <div className="form-group d-flex justify-content-center">
              <input
                className="form-control bg-primary text-light w-50"
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
