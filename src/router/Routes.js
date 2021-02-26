import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import About from "../components/About";
import CustomerList from "../components/customers/CustomerList";
import CreateCustomer from "../components/customers/CreateCustomer";
import EditCustomer from "../components/customers/EditCustomer";
import ProductList from "../components/products/ProductList";
import CreateProduct from "../components/products/CreateProduct";
import EditProduct from "../components/products/EditProduct";
import Home from "../components/Home";
import Contact from "../components/Contact";

export const Routes = [
  {
    component: Home,
    title: "Home",
    exact: true,
    path: "/",
    sidebar: true,
    onlyMobile: false,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    component: Contact,
    title: "Contact",
    path: "/contact",
    sidebar: true,
    cName: "nav-text",
    onlyMobile: true,
  },
  {
    component: About,
    title: "About",
    path: "/about",
    sidebar: true,
    cName: "nav-text",
    onlyMobile: true,
  },
  {
    component: CustomerList,
    title: "Customers",
    path: "/customers",
    sidebar: true,
    onlyMobile: false,
    exact: true,
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    component: CreateCustomer,
    path: "/customers/create",
    sidebar: false,
  },
  {
    component: EditCustomer,
    path: "/customers/:id/edit",
    sidebar: false,
  },
  {
    component: ProductList,
    title: "Products",
    path: "/products",
    sidebar: true,
    onlyMobile: false,
    exact: true,
    icon: <AiIcons.AiFillAppstore />,
    cName: "nav-text",
  },
  {
    component: CreateProduct,
    path: "/products/create",
    sidebar: false,
  },
  {
    component: EditProduct,
    path: "/products/:id/edit",
    sidebar: false,
  },
];
