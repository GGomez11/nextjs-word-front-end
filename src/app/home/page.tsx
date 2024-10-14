import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";


export default async function Home() {
    let word = {
        word: 'Diminutive',
        definition: 'very small',
        synonym: 'canine',
        pronunciation: 'dawg',
    }


    const session = await auth();
    
    if (!session?.user) redirect("/");

    return (
        <div className="flex flex-col justify-start items-center">
            <SearchBar/>
            <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[300px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[300px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <EmptyWordCard/>
                </div>
            </div>
        </div>
    )
}