import axios from "axios"

const url = "http://cbb.northeurope.cloudapp.azure.com:85/Categories"

export const categoryServices = {
    getCategories,
}

async function getCategories() {
    return axios.get(url).then(res => res).catch(err => err.response)
}