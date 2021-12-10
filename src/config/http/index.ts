import axios from "axios";

const ENDPOINT = "https://api.coronavirus.data.gov.uk/v1/data"

export const apiInstance = axios.create({
    baseURL: ENDPOINT
})
