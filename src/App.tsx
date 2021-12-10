import React, {useEffect, useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllCasesByPublishDate } from "./repo/Cases";
import { groupBy } from "lodash"
import {CasesByPublishDate} from "./model/Api";

function App() {
  const [ year, setYear ] = useState('2020')
  const [ casesByDate, setCasesByDate ] = useState<CasesByPublishDate[]>([])

  const fetchApi = useCallback(async () => {
    const data = await getAllCasesByPublishDate()
    let dataByYear = groupBy(data, el => el.date.getFullYear())
    setCasesByDate(dataByYear[year])
  }, [])

  useEffect(() => {
    fetchApi()
  }, [fetchApi])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
