import { useEffect, useState } from "react";
import { customerServices } from "../../services/customerServices"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import DeleteModal from "../common/DeleteModal";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [customerDelete, setCustomerDelete] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [update, setUpdate] = useState(new Date())

    const handleClose = () => setShowDeleteModal(false);
    const openDeleteModal = (customer) => {
        setShowDeleteModal(true)
        setCustomerDelete(customer)
    }
    const { SearchBar } = Search;


    const columns = [
        {
            dataField: 'customerId',
            text: 'Customer ID',
            sort: true,
        },
        {
            dataField: 'firstName',
            text: 'Customer Name',
            sort: true
        },
        {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true,
        },
        {
            text: 'Actions',
            dataField: 'button',
            formatter: (rowContent, row) => {
                return (
                    <div className="d-flex justify-content-center">
                        <Link className="text-light" to={"customers/" + row.customerId + "/edit"}>
                            <Button className="bg-transparent border-light mx-2">
                                <AiIcons.AiOutlineEdit color="orange" />
                            </Button>
                        </Link>

                        <Button onClick={() => openDeleteModal(row)} className="bg-transparent border-light mx-2">
                            <FaIcons.FaTrash color="red" />
                        </Button>
                    </div>
                );
            },
        }
    ];

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            Showing { from} to { to} of { size} Results
        </span>
    );

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: customers.length
        }]
    };

    useEffect(() => {
        customerServices.getCustomers()
            .then(res => {
                setCustomers(res.data)
                setLoaded(true)
            })
            .catch(err => console.log("err", err.response))
    }, [update])

    return (
        <div className="content">
            <DeleteModal handleClose={handleClose} customer={customerDelete} show={showDeleteModal} setUpdate={setUpdate} />

            <div className="d-flex justify-content-end">
                <Link to="/customers/create">
                    <Button>
                        <AiIcons.AiOutlinePlus />
                        Create customer
                    </Button>
                </Link>
            </div>

            <h1>Customers</h1>

            <div>
                <ToolkitProvider
                    keyField="customerId"
                    data={customers}
                    columns={columns}
                    search
                    bootstrap4
                >
                    {
                        props => (
                            <div>
                                <SearchBar {...props.searchProps} />
                                {loaded ? <BootstrapTable
                                    hover
                                    striped
                                    {...props.baseProps}
                                    pagination={paginationFactory(options)}
                                /> : <h3>Loading...</h3>}
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        </div >
    );
}

export default CustomerList;