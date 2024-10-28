'use client'

import { redirect } from "next/navigation";
import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Word } from "../types/word"

export default function Home() {
  const { data: session, status } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [words, setWords] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter();

  const filteredCards = words.filter((card) => {
    return card.word.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
})

  const onDelete = (wordName: string) => {
    const updatedWords = words.filter((word) => word.word !== wordName);
    setWords(updatedWords);
  }

  const onAdd = (word: string) => {
    // Make api request

    // If request was 200 status
    // Add word to words list
    // 
    //setWords(prevWords => [...prevWords, newWord]);
    // Else
    // Word not found
  }

  useEffect(() => {
    if (status === 'loading') {
      // Can load spinnger
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/')
    }

    if (status === 'authenticated' && session?.idToken) {
        fetch('http://localhost:8000/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.idToken}`, // Include any token if necessary
          },
          body: JSON.stringify({
            email: session.user?.email,
            name: session.user?.name       
          })
        })
        .then(() => {
          fetch('http://localhost:8000/api/words/', {
            headers: {
              'Authorization': `Bearer ${session.idToken}`,
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              res.json()
            })
            .then((data: {words: Word[]}) => {
              setWords(data.words)
              setIsLoaded(true)
            })
            .catch((error) => {
              console.error('Fetch error:', error);
            });
        })  
    }
  }, [status, router, session]);

  return (
    <div className="flex flex-col justify-start items-center">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredCards.map((word: any, index: number) => (
          <div key={index} className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
            <WordCard word={word} onDelete={() => onDelete(word.word)} />
          </div>
        ))}
        <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
          <EmptyWordCard onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}