import React, {useEffect, useCallback, useState} from 'react';
import './App.css';
import { getAllCasesByPublishDate } from "./repo/Cases";
import { groupBy } from "lodash"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const [ year, setYear ] = useState('2020')
  const [ casesByDate, setCasesByDate ] = useState<{ month: string, cases: number }[]>([])

  const fetchApi = useCallback(async () => {
    const data = await getAllCasesByPublishDate()
    let dataByYear = groupBy(data, el => el.date.getFullYear())
    const casesByMonth = Object.values( groupBy(dataByYear[year], el => el.date.getMonth() + 1) )
        .map( el => el.reduce((acc, el) => acc + el.cases, 0))
        .map( (el, index) => ({ month: `Month: ${index  + 1}`, cases: el }))
    setCasesByDate(casesByMonth)
  }, [])

  useEffect(() => {
    fetchApi()
  }, [fetchApi])

  return (
    <div className="App">
      <header className="App-header">
        {casesByDate.length > 0 &&
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={casesByDate}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="month"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey="cases" fill="#8884d8"/>
            </BarChart>
          </ResponsiveContainer>
        }
      </header>
    </div>
  );
}

export default App;
