'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IsdarkMode from "./IsdarkMode";


type Props = {
    groupes : { groupe : string }[] | undefined
}
const Header = ({groupes} : Props) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const createUrl= (groupe : string) => {
        const params = new URLSearchParams(searchParams);
        params.set("groupe", groupe);
        router.push(`${pathName}?${params.toString()}`);
    }

  return (
    <header className="w-full h-14 border-b dark:border-b-neutral-50">
                <nav className="flex items-center justify-between container mx-auto  px-2 py-2 dark:border-l-neutral-50 dark:border-r-neutral-50  border-r border-l ">
                <Select onValueChange={(value) => createUrl(value)}>
                    <SelectTrigger className="w-96 bg-none shadow-none h-10 rounded-none dark:border-neutral-50">
                        <SelectValue placeholder="Groupe" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">

                    {
                    groupes?.map((groupe , index) => (
                        <SelectItem key={index} value={groupe.groupe} >
                            {groupe.groupe}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <IsdarkMode />
                </nav>
            </header>
  )
}

export default Header
