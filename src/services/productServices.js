import axios from "axios"

const url = "http://cbb.northeurope.cloudapp.azure.com:85/Products"

export const productServices = {
    getProducts,
    addProduct
}

async function getProducts() {
    return axios.get(url).then(res => res).catch(err => err.response)
}

async function addProduct(product) {
    return axios.post(url, product).then(res => res).catch(err => err.response)
}