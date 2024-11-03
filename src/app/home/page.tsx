'use client'

import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { Word } from "../types/word"
import { auth } from '../lib/firebase-config';
import { authenticatedFetch } from '../utils/doFetch';
import {onAuthStateChanged, User} from 'firebase/auth';
import { useAuth } from '../utils/AuthContext';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [words, setWords] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();


  const filteredCards = words?.filter((card) => {
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

  async function fetchWords () {
    try {
      const response = await authenticatedFetch('/api/words/', undefined, user)
      const data = await response.json();
      setWords(data.words);
      setIsLoaded(true);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  useEffect(() => {
    if (user) {
      fetchWords()
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please sign in to view this content</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredCards?.map((word: any, index: number) => (
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