import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";


export default async function Home() {
    let word = {
        word: 'Dog',
        definition: 'a domesticated carnivorous mammal that has a long snout, an acute  ...',
        synonym: 'canine',
        pronunciation: 'dawg',
    }


    const session = await auth();
    
    if (!session?.user) redirect("/");

    return (
        <div className="flex flex-col justify-evenly items-center">
            <SearchBar/>
            <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/> 
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <WordCard word={word}/>
                </div>
                <div className="mb-10 flex flex-row justify-center w-full">
                    <EmptyWordCard/>
                </div>
            </div>
        </div>
    )
}