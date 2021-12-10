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

enum MetricCases {
    newCasesByPublishDate = "newCasesByPublishDate",
    cumCasesByPublishDate = "cumCasesByPublishDate"
}

export { AreaCode, AreaName, AreaType, MetricCases }