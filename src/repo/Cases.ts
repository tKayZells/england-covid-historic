import {apiInstance} from "../config/http"
import {
    AreaName,
    AreaType,
    CasesByPublishDate,
    Filters,
    Structure,
    StructureMetric
} from "../model/Api";

export async function getAllCasesByPublishDate( ) : Promise<CasesByPublishDate[]> {

    const filters : Filters = {
        areaType: AreaType.nation,
        areaName: AreaName.england
    }

    const filterArr = (Object.keys(filters) as unknown as (keyof Filters)[]).map(
        (el) => `${el}=${filters[el]}`
    )

    const dataStructure : Structure = { date: StructureMetric.date , cases: StructureMetric.newCasesByPublishDate }
    const { data, status } = await apiInstance.get<{ data: { date: string, cases: number }[] }>('', {
        params: {
            filters: filterArr.join(';'),
            structure: JSON.stringify(dataStructure)
        }
    })

    if(status !== 200)
        throw new Error("There was a problem fetching the data")

    return data.data.map( (el) => ({
        date: new Date(el.date),
        cases: el.cases
    }))
}