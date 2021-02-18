import axios from "axios"

const url = "http://cbb.northeurope.cloudapp.azure.com:85/Brands"

export const brandServices = {
    getBrands,
}

async function getBrands() {
    return axios.get(url).then(res => res).catch(err => err.response)
}