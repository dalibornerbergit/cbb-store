import { useEffect, useState } from "react";
import { productServices } from "../../services/productServices";
import { brandServices } from "../../services/brandServices";
import { categoryServices } from "../../services/categoryServices";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import ProductDeleteModal from "./ProductDeleteModal";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState(null);
  const [categories, setCategories] = useState(null);
  const [productDelete, setProductDelete] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [update, setUpdate] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleClose = () => setShowDeleteModal(false);
  const openDeleteModal = (product) => {
    setShowDeleteModal(true);
    setProductDelete(product);
  };

  const { SearchBar } = Search;

  const NoDataIndication = () => (
    <div className="d-flex justify-content-center">
      <span>No data available</span>
    </div>
  );

  const columns = [
    {
      dataField: "productName",
      text: "Product name",
      sort: true,
    },
    {
      dataField: "modelYear",
      text: "Model year",
      sort: true,
    },
    {
      dataField: "brandId",
      text: "Brand Id",
      sort: true,
      formatter: (cell) => {
        const newValue = brands.find((brand) => brand.value === cell);

        return <span>{newValue.label}</span>;
      },
      filter: selectFilter({
        options: brands,
      }),
    },
    {
      dataField: "categoryId",
      text: "Category Id",
      sort: true,
      filter: selectFilter({
        options: categories,
      }),
    },
    {
      text: "Actions",
      dataField: "actions",
      formatter: (rowContent, row) => {
        return (
          <div className="d-flex justify-content-center">
            <Link
              className="text-light"
              to={"products/" + row.productId + "/edit"}
            >
              <Button className="bg-transparent border-light mx-2">
                <AiIcons.AiOutlineEdit color="orange" />
              </Button>
            </Link>

            <Button
              onClick={() => openDeleteModal(row)}
              className="bg-transparent border-light mx-2"
            >
              <FaIcons.FaTrash color="red" />
            </Button>
          </div>
        );
      },
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: products.length,
      },
    ],
  };

  useEffect(async () => {
    await productServices
      .getProducts()
      .then((res) => {
        setProducts(res.data);
        setIsLoaded(true);
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
  }, [update]);

  return (
    <div className="content">
      <Alert variant="success" show={showAlert}>
        {productDelete.productName} deleted
      </Alert>

      <ProductDeleteModal
        show={showDeleteModal}
        handleClose={handleClose}
        product={productDelete}
        setUpdate={setUpdate}
        setShowAlert={setShowAlert}
      />

      <div className="d-flex justify-content-end">
        <Link to="/products/create">
          <Button>
            <AiIcons.AiOutlinePlus />
            {t("Create")} {t("Product")}
          </Button>
        </Link>
      </div>

      <h1>{t("Products")}</h1>

      <div>
        {products && brands && categories && (
          <ToolkitProvider
            keyField="productId"
            data={products}
            columns={columns}
            search
            bootstrap4
          >
            {(props) => (
              <div>
                <SearchBar {...props.searchProps} />
                {isLoaded ? (
                  <BootstrapTable
                    hover
                    striped
                    {...props.baseProps}
                    pagination={paginationFactory(options)}
                    filter={filterFactory()}
                    noDataIndication={() => <NoDataIndication />}
                  />
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            )}
          </ToolkitProvider>
        )}
      </div>
    </div>
  );
};

export default ProductList;
