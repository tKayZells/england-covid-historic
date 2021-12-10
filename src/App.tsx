import React, {useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllCasesByPublishDate } from "./repo/Cases";

function App() {

  const fetchApi = useCallback(async () => {
    const data = await getAllCasesByPublishDate()
    console.log(data)
  }, [])

  useEffect(() => {
    fetchApi()
  }, [fetchApi])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
