import { apiInstance } from "../config/http"

export async function getAllCasesByPublishDate() {
    const { data, status } = await apiInstance.get(`filters=areaType=nation;areaName=england&structure={"date":"date","cases":"newCasesByPublishDate"}`)

    if(status !== 200)
        return ""

    return data.data
}