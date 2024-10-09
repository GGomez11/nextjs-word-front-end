import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";

export default async function Home() {
    const session = await auth();
    
    if (!session?.user) redirect("/");

    return (
        <div className="flex flex-col justify-evenly items-center">
            <div className="pb-4 sm:text-xl md:text-2xl lg:text-3xl gap-y-3 px-10 zeroWidth:hidden xl:block">Welcome {session?.user.name}, here are your words.</div>
            <SearchBar/>
            <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/>
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/>
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard/>
                </div>
            </div>
            <div className="">Navigation Buttons</div>
        </div>
    )
}