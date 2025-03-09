import React from 'react'
const rows = {
    'LUNDI' : 0,
    'MARDI' : 1,
    'MERCREDI' : 2,
    'JEUDI' : 3,
    'VENDREDI' : 4,
    'SAMEDI' : 5
}
const columns = {
    '08:30 - 10:15' : 0,
    '10:15 - 12:45' : 1,
    '12:45 - 14:30' : 2,
    '14:30 - 16:30' : 3
}
const Square = ({ position , data , heure , jour} : { position : number[],  data : any , heure : string ,jour : string}) => {
    const shedule= data?.find((emploi : any) => emploi.jour?.toLowerCase() === jour?.toLowerCase() && emploi.time?.toLowerCase() === heure?.toLowerCase())
    console.log("emploi de temps", shedule);

    return (
    <div  className="flex flex-col items-center justify-center border-b border-r last:border-b-0 h-[8.34rem] font-outfit dark:border-b-neutral-50 dark:border-r-neutral-50">
    <h1 className="text-xl text-center font-semibold">{shedule?.module}</h1>
    <p className=" text-center">{shedule?.formateur}</p>
    <p className="text-lg ">{shedule?.salle}</p>
    </div>
  )
}

export default Square
