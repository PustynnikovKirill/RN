import { useState } from 'react'
import './App.css'
import {Cars} from "./Cars.tsx";



export const App = ()=>  {
  const [topCars, setTopCars] = useState( [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ])


  return (
    <>
        <Cars topCars = { topCars } />
    </>
  )
}


