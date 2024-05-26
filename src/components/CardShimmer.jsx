import React from 'react'
export default function CardShimmer() {
    // const shimmer=array.from({length:15})
    // console.log(shimmer)
  return (
    <div className="flex justify-evenly flex-wrap">

       {Array.from({length:10}).map((el ,i)=>{
           
   return <div key={i} className="w-[20rem] h-[350px] animate-pulse bg-gray-300 rounded-lg overflow-hidden shadow-2xl scale-95 hover:scale-100 duration-300">
         </div>
    })}
    </div>
  )
}
