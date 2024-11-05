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
    return card.word.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  })

  async function onDelete(wordName: string) {
    try {
      const response = await authenticatedFetch('/api/words/'+wordName, {
        method: 'DELETE',
      },
      user)
      const updatedWords = words.filter((word) => word.word !== wordName);
      setWords(updatedWords);
    } catch (error) {
      console.log('Delete error:', error)
    } 
  }

  async function addWord(word: string) {
    if (words && words.length > 0 && words.some(word_in_list => word_in_list.word.toLowerCase() == word.toLowerCase())){
      alert('Words already exists in your vocabulary')
      return
    }
    
    try {
      const response = await authenticatedFetch('/api/words', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ word: word })
      },
        user)
      const updatedWords = await response.json();
      setWords(updatedWords.words)
    } catch (error) {
      console.error('Fetch error:', error);
    }
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
          <EmptyWordCard onAdd={addWord} />
        </div>
      </div>
    </div>
  )
}