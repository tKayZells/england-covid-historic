enum AreaCode {
    england = "E92000001",
    northernIreland = "N92000002",
    scotland = "S92000003",
    wales = "W92000004"
}

enum AreaName {
    england = "england",
    northernIreland = "northern ireland",
    scotland = "scotland",
    wales = "wales"
}

enum AreaType {
    overview = "overview",
    nation = "nation",
    region = "region",
    nhsRegion = "nhsRegion",
    utla = "utla",
    ltla = "ltla"
}

enum StructureMetric {
    date = "date",
    areaName = "areaName",
    areaCode = "areaCode",
    alertLevel = "alertLevel",
    newCasesByPublishDate = "newCasesByPublishDate"
}

type Structure = {
    [k : string] : StructureMetric
}

interface Filters {
    areaType?: AreaType
    areaName?: AreaName
    areaCode?: AreaCode
}

interface CasesByPublishDate {
    date: Date,
    cases: number
}

export {AreaCode, AreaName, AreaType, StructureMetric };
export type { CasesByPublishDate, Filters, Structure };
