import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcat } from '../../Redux/category'


export default function Cateorgy() {
    let {cateData } = useSelector((data)=>data.cate)
    console.log(cateData)
    let disbush = useDispatch()
    useEffect(()=>{
      disbush(getcat())
    },[])
  return (
    <div>
        {cateData?.map((data)=><p key={data._id}>{data.name}</p>)}
    </div>
  )
}
