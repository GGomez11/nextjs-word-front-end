'use client'

import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    
    let res = {
        "words": [
        {
            word: 'Diminutive',
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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

    const [searchQuery, setSearchQuery] = useState('');
    const [words, setWords] = useState(res.words)

    const filteredCards = words.filter((card) => {
        return card.word.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    })

    const onDelete = (id:number) => {
        const updatedWords = words.filter((word) => word.id !== id);
        setWords(updatedWords);
    }
    
    useEffect(() => {
        if (status === 'loading') {
          // Can load spinnger
          return;
        }
    
        if (status === 'unauthenticated') {
          router.push('/')
        }
      }, [status, router]);

    return (
        <div className="flex flex-col justify-start items-center">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {filteredCards.map((word: any, index: number) => (
                    <div key={index} className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                        <WordCard word={word} onDelete={() => onDelete(word.id)}/> 
                    </div>
                ))}
                <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
                    <EmptyWordCard/>
                </div>
            </div>
        </div>
    )
}