import { useEffect, useState } from 'react';
import Card from './component/Card.jsx'
import './App.css';


function App() {

  const [data,setData] = useState([])
  const fetchData =  async () => {
  const response = await fetch('https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10', {
      method: 'GET',
    })
  const newdata = await response.json()
  console.log(newdata.films)
  setData(newdata.films)

  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="App">
      <Card filmsData={data}/>
    </div>
  );
}

export default App;
