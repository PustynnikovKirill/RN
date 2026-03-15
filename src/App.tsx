import { useState } from 'react'
import './App.css'
import {Cars} from "./Cars.tsx";
import {CustomButton} from "./Button.tsx";
import {Button} from "./Components/Button.tsx";




export const App = ()=>  {

  const [count, setCount] = useState(0);
  const [topCars, setTopCars] = useState( [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ])

    const countAdd =()=>{
        setCount(c=>c+1)
    }
    const countZero =()=>{
        setCount(0)
    }

    const button1 = (name:string, age:number) => {
            console.log('button1',name,age)
    }
    const button2 = (name:string) => {
        console.log('button2',name)
    }
    const button3 = () => {
        console.log('button2',)
    }

  return (
      <>
        <Cars topCars={topCars}/>
        <CustomButton/>
          <Button name = 'Kiryl' callback={()=>button1('Kirill',32)}/>
          <Button name = 'Yelizaveta'callback={()=>button2('Yelizaveta')}/>
          <Button name = 'Dumb'callback={(button3)}/>
          <ul><li>{count}</li></ul>
          <button onClick={countAdd}>count</button>
          <button onClick={()=>countZero(0)}>0</button>
      </>
  );
}


