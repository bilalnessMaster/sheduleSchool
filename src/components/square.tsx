import { EmploiProps } from '@/app/lib/types'
import React from 'react'


const Square = ({ data , heure , jour} : {  data : EmploiProps[] | undefined, heure : string ,jour : string}) => {
    const shedule= data?.find((emploi : EmploiProps) => emploi.jour?.toLowerCase() === jour?.toLowerCase() && emploi.time?.toLowerCase() === heure?.toLowerCase())
    return (
    <div  className="flex flex-col items-center justify-center border-b border-r last:border-b-0 h-[8.34rem] font-outfit dark:border-b-neutral-50 dark:border-r-neutral-50">
    <h1 className="text-sm md:text-xl text-center font-semibold">{shedule?.module}</h1>
    <p className=" text-xs md:text-sm text-center">{shedule?.formateur}</p>
    <p className="text-xs md:text-sm">{shedule?.salle}</p>
    </div>
  )
}

export default Square
