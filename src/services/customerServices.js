import axios from "axios";

const url = "http://cbb.northeurope.cloudapp.azure.com:85/Customers";

export const customerServices = {
  getCustomers,
  addCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};

async function getCustomers() {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err.response);
}

async function getSingleCustomer(id) {
  return axios
    .get(`${url}/${id}`)
    .then((res) => res)
    .catch((err) => err.response);
}

async function addCustomer(customer) {
  return axios
    .post(url, customer)
    .then((res) => res)
    .catch((err) => err.response);
}

async function updateCustomer(customer) {
  return axios
    .put(`${url}/${customer.customerId}`, customer)
    .then((res) => res)
    .catch((err) => err.response);
}

async function deleteCustomer(id) {
  return axios
    .delete(`${url}/${id}`)
    .then((res) => res)
    .catch((err) => err.response);
}
