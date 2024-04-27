import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changebyname, dicrease, increase, increaseByAmount } from '../../Redux/counterSlice';

export default function About() {
    let {value,name}=useSelector((data)=>data.counter);
    let dispush= useDispatch()
  return (
    <div>
     <p> About</p>
     <h1>Counter {value}</h1>
     <h1>{name}</h1>
     <button className='btn btn-danger' onClick={()=>dispush(increase())}> inrease </button>
     <button className='btn btn-danger' onClick={()=>dispush(increaseByAmount(5))}> inreaseBy </button>
     <button className='btn btn-danger' onClick={()=>dispush(dicrease())}> - </button>
     <button className='btn btn-warning' onClick={()=>dispush(changebyname('lamia'))}>chamnge by action</button>
    </div>
  )
}


