
import { prisma } from "@/lib/db";




export const fetchGroupe = async () => {
    try {
        const response = await prisma.emploi.groupBy({
            by: ["groupe"],
        })
        return response
    } catch (error) {
        console.log("fetch groupe error", error);

    }
}

export const fetchGroupeByName = async (groupe : string) => {
    console.log(groupe);

    try {
       if(groupe){
        const response = await prisma.emploi.findMany({
            where : {
                groupe
            }
        })
        return response;
       }
       return ;
    } catch (error) {
        console.log(error);
    }
}
