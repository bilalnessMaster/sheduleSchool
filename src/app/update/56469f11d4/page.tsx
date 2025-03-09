'use client';
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Page = () => {
    const [file, setFile] = useState<ArrayBuffer | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const hanldeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                toast.error("Please upload a valid .xlsx file.");
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast.error("File size must be less than 5MB.");
                return;
            }
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                setFile(event.target?.result as ArrayBuffer);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (file) {

            try {
                const base64File = Buffer.from(file).toString("base64");
                const { data } = await axios.post("/api/saveexcel", { file : base64File });
                if (data.success) {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error("An error occurred while uploading the file.");
                console.error(error);
            }
        } else {
            toast.error("Veuillez télécharger un fichier");
        }
        setLoading(false);
    };

    return (
        <main className="h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex p-1 flex-col items-center justify-center w-1/4 border gap-4">
                <label htmlFor="file" className="cursor-pointer h-44 border-2 border-dashed w-full flex items-center justify-center">
                    <span className="text-xs flex flex-col items-center justify-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        <span>télécharger un fichier</span>
                    </span>
                    <input
                        type="file"
                        id="file"
                        onChange={hanldeFileChange}
                        className="hidden"
                        accept=".xlsx"
                        aria-label="Upload Excel file"
                    />
                </label>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="disabled:bg-blue-200 w-full bg-neutral-200 hover:bg-neutral-400 cursor-pointer text-white font-semibold py-2 px-4 rounded"
                    aria-label={isLoading ? "Uploading file..." : "Upload file"}
                >
                    {isLoading ? "Téléchargement..." : "Télécharger"}
                </button>
            </form>
        </main>
    );
};

export default Page;
