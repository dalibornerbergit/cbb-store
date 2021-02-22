import axios from "axios"

const url = "http://cbb.northeurope.cloudapp.azure.com:85/Products"

export const productServices = {
    getProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
}

async function getProducts() {
    return axios.get(url).then(res => res).catch(err => err.response)
}

async function getSingleProduct(id) {
    return axios.get(`${url}/${id}`).then(res => res).catch(err => err.response)
}

async function addProduct(product) {
    return axios.post(url, product).then(res => res).catch(err => err.response)
}

async function updateProduct(product) {
    return axios.put(`${url}/${product.productId}`, product).then(res => res).catch(err => err.response)
}

async function deleteProduct(id) {
    return axios.delete(`${url}/${id}`).then(res => res).catch(err => err.response)
}