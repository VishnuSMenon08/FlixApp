import { useEffect, useState } from 'react';
import Card from './component/Card.jsx'
import './App.css';


function App() {

  const [data,setData] = useState([])
  const [defaultFilter,setDefaultFilter] = useState({value : 5000})
  const fetchData =  async () => {
  const response = await fetch('https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10', {
      method: 'GET',
    })
  const newdata = await response.json()
  setData(newdata.films)
  setDefaultFilter({value:5500})

  }

  useEffect(()=>{
    fetchData()
  },5000)
  return (
    <div className="App">
      <Card filmsData={data} timeFilter={defaultFilter}/>
    </div>
  );
}

export default App;
