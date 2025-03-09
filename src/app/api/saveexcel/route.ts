
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server"
import * as XLSX from "xlsx"

const days = ["lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi" , "samedi" , "dimanche"]
export const POST = async (req : Request) =>{
    try {
        const {file} = await req.json();
        console.log("file is ",file);
        if (!file) {
            return NextResponse.json(
                { message: "Veuillez télécharger un fichier", success: false },
                { status: 400 }
            );
        }
        const binaryString = atob(file); // Decode base64
        const workbook = XLSX.read(binaryString, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet  = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);
        const parsedData = sheetData.map((row : unknown) => {
            // const strFormateur = row?.__EMPTY?.toUpperCase();
            const keys = Object.keys(row as keyof typeof row).length
            // console.log(keys);


            if(
                !days.includes(row?.__EMPTY?.toLowerCase()) &&
                row?.__EMPTY !== undefined &&
                row?.__EMPTY !== "FORMATEUR" &&
                keys === 9){
                return {
                    "formateur" : row.__EMPTY,
                    "module" :   row.__EMPTY_1,
                    "seance" : row.__EMPTY_2,
                    "groupe" : row.__EMPTY_3,
                    "salle" : row.__EMPTY_4,
                    "jour" : row.__EMPTY_5,
                    "moment" : row.__EMPTY_6,
                    "time" : row.__EMPTY_7,
                    "date" : row.__EMPTY_8,
                    "n" : row.__EMPTY_9,
                    "prevus" : row.__EMPTY_10,
                    "presents" : row.__EMPTY_11,
                    "emargement" : row.__EMPTY_12


                }
            }

        });

        const filtredData = parsedData.filter((item) => item ); // null
        await prisma.$transaction([
            prisma.emploi.deleteMany(), // Delete all existing records
            prisma.emploi.createMany({ data: filtredData }), // Insert new records
        ]);

        return NextResponse.json({filtredData , success : true , message : "data saved successfully"} , {status : 200})
    } catch (error) {
        console.log(error);

        return NextResponse.json({error , success : false , message : "something went wrong"} , {status : 500})
    }
}
