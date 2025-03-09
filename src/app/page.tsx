
import Header from "@/components/Header";
import Square from "@/components/square";

import { fetchGroupe, fetchGroupeByName } from "./lib/query";

const heures = [
    {
        heure : "08:30 - 10:15"
    },
    {
        heure : "10:15 - 12:45"
    },
    {
        heure : "12:45 - 14:30"
    },
    {
        heure : "14:30 - 16:30"
    },
]
const jours = [
    {
        jour : "Lundi"
    },
    {
        jour : "Mardi"
    },
    {
        jour : "Mercredi"
    },
    {
        jour : "Jeudi"
    },
    {
        jour : "Vendredi"
    },
    {
        jour : "Samedi"
    }
]
const rows = {
    0 : 'LUNDI' ,
    1 : 'MARDI' ,
    2 : 'MERCREDI' ,
    3 : 'JEUDI' ,
    4 : 'VENDREDI' ,
    5 : 'SAMEDI'
}
const columns = {
    0  : '08H30-11H00'
    ,1 : '11H-13H30'
    ,2 : '13H30-16H00'
    ,3 : '16H-18H30'
}
export default async function Home(props : {searchParams : Promise<{groupe : string}>}) {
    const searchParams = await props.searchParams
    const groupe = searchParams.groupe
    const [ groupes , timeline ] = await Promise.all([
        fetchGroupe(),
        fetchGroupeByName(groupe)
    ])
    // console.log(timeline);
    const squares = []
    for(let row = 0 ; row<6; row++){
        for(let column= 0 ; column<4; column++){
            const square = <Square jour={rows[row as keyof typeof rows]} heure={columns[column as keyof typeof columns]} data={timeline}  key={column+row*Math.random()-Math.random()}   />
            squares.push(square)
        }
    }


    return (
        <main className="font-outfit flex flex-col h-screen dark:text-neutral-200 relative" >
            <Header groupes={groupes} />
            <div className="w-full border-b dark:border-b-neutral-50 ">
            <section className="container mx-auto border-r border-l  dark:border-l-neutral-50 dark:border-r-neutral-50 font-normal" id="schedule">
                    <div className="flex   ">
                        <div className=" w-20 md:w-64 border-r border-b dark:border-b-neutral-50 dark:border-r-neutral-50">
                            <h1 className="flex items-center justify-center text-sm md:text-xl">
                                <span>Jour</span>
                                <span>/</span>
                                <span>Heures</span>
                            </h1>
                        </div>
                        <div className="grid grid-cols-4 flex-1">
                        {
                            heures.map((heure , index) => (
                                <div key={index} className=" flex flex-grow flex-col items-center justify-center border-b border-r dark:border-b-neutral-50 dark:border-r-neutral-50">
                                    <h1 className="text-sm md:text-xl">{heure.heure}</h1>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                <div className="w-full h-200 rounded-xl bg-white dark:bg-[#262629] flex">
                    <div className="grid w-20 md:w-64">
                    {
                        jours.map((jour , index) => (
                            <div key={index} className="flex flex-col items-center justify-center border-b border-r last:border-b-0 h-[8.34rem] dark:border-b-neutral-50 dark:border-r-neutral-50 ">
                                <h1 className="md:text-xl ">{jour.jour}</h1>
                            </div>
                        ))
                    }
                    </div>
                    <div className="grid grid-cols-4 flex-1">
                    {
                        squares
                    }
                    </div>
                </div>
            </section>
            </div>
            <div className="w-full flex-grow ">
                   <div className="container mx-auto border-r border-l dark:border-l-neutral-50 dark:border-r-neutral-50 h-full"></div>
            </div>

        </main>
);
}
