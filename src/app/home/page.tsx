'use client'

import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";
import { useSession } from "next-auth/react";


export default function Home() {
    const { data: session, status } = useSession();

    let res = {
        "words": [
        {
            word: 'Diminutive',
            results: [
                {
                    definition: 'very small',
                    partOfSpeech: 'adjective',
                    synonym: ['bantam', 'flyspeck', 'lilliputian', 'midget', 'petite', 'tiny'],
                },
                {
                    definition: 'a word that is formed with a suffix (such as -let or -kin) to indicate smallness',
                    partOfSpeech: 'noun'
                }
            ],
            pronunciation: `dɪ'mɪnjətɪv`,
        },
        {
            word: 'Nugatory',
            results: [
                {
                    definition: 'of no real value',
                    partOfSpeech: 'adjective',
                    synonym: ['worthless'],
                },
            ],
            pronunciation: `'nuɡə,toʊri`,
        },
        {
            word: 'Rancid',
            results: [
                {
                    definition: 'smelling of fermentation or staleness',
                    partOfSpeech: 'adjective',
                    synonym: ['sour'],
                },
                {
                    definition: '(used of decomposing oils or fats) having a rank smell or taste usually due to a chemical change or decomposition',
                    partOfSpeech: 'adjective',
                }
            ],
            pronunciation: `'rænsɪd`,
        },
        {
            word: 'Diminutive',
            results: [
                {
                    definition: 'very small',
                    partOfSpeech: 'adjective',
                    synonym: ['bantam', 'flyspeck', 'lilliputian', 'midget', 'petite', 'tiny'],
                },
                {
                    definition: 'a word that is formed with a suffix (such as -let or -kin) to indicate smallness',
                    partOfSpeech: 'noun'
                }
            ],
            pronunciation: `dɪ'mɪnjətɪv`,
        },
        {
            word: 'Nugatory',
            results: [
                {
                    definition: 'of no real value',
                    partOfSpeech: 'adjective',
                    synonym: ['worthless'],
                },
            ],
            pronunciation: `'nuɡə,toʊri`,
        },
        {
            word: 'Rancid',
            results: [
                {
                    definition: 'smelling of fermentation or staleness',
                    partOfSpeech: 'adjective',
                    synonym: ['sour'],
                },
                {
                    definition: '(used of decomposing oils or fats) having a rank smell or taste usually due to a chemical change or decomposition',
                    partOfSpeech: 'adjective',
                }
            ],
            pronunciation: `'rænsɪd`,
        },
    ]}
    
    // const session = await auth();
    
    if (!session) {
        if (!session) redirect("/");
    };

    return (
        <div className="flex flex-col justify-start items-center">
            <SearchBar/>
            <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {res.words.map((word: any) => (
                    <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                        <WordCard word={word}/> 
                    </div>
                ))}
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <EmptyWordCard/>
                </div>
            </div>
        </div>
    )
}