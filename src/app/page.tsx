'use client'

import WordCard from "./components/wordCard";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { ReactTyped } from "react-typed";
import { signInWithGoogle } from "./lib/firebase-config";
import { useAuth } from "./utils/AuthContext";
import { Word } from "./types/word";

export default function Home() {
  const router = useRouter();
  const [defaultWords, setDefaultWords] = useState<Word>({
    word: 'diligent',
    id: 1,
    results: [
      {
        definition: 'very small',
        partOfSpeech: 'adjective',
        synonym: [
          "<strong>busy</strong> <strong>industrious</strong> <strong>diligent</strong> <strong>assiduous</strong> <strong>sedulous</strong> mean actively engaged or occupied. <strong>busy</strong> chiefly stresses activity as opposed to idleness or leisure. ",
          " <strong>industrious</strong> implies characteristic or habitual devotion to work. ",
          " <strong>diligent</strong> suggests earnest application to some specific object or pursuit. ",
          " <strong>assiduous</strong> stresses careful and unremitting application. ",
          " <strong>sedulous</strong> implies painstaking and persevering application. "
        ]
      },
      {
        definition: 'a word that is formed with a suffix (such as -let or -kin) to indicate smallness',
        partOfSpeech: 'noun',
      },
    ],
    pronunciation: {
      written: `'di-lə-jənt`,
      audioURL: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/d/dilige04.mp3'
    }
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const { user, loading } = useAuth();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/words/homePage`)
      .then((res) => res.json())
      .then((data) => {
        setDefaultWords(data)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [])

  const handleSignIn = async () => {
    try {
      if (user) {
        router.push('/home');
      } else {
        const result = await signInWithGoogle();
        if (result?.user) {
          router.push('/home');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="h-screen">
      {/* Mobile View */}
      <div className="h-screen zeroWidth:flex flex-col justify-evenly items-center lg:hidden">
        <div className="zeroWidth:flex flex-col justify-center md:items-start items-center xs:px-4 sm:px-9 lg:px-20 lg:hidden">
          <p className="text-center text-2xl xs:text-3xl sm:text-5xl 2xl:text-7xl mb-1">New Words at Your Fingertips.</p>
          <p className="zeroWidth:hidden md:block lg:hidden md:min-h-28 md:text-3xl 2xl:text-6xl whitespace-pre">
            <ReactTyped strings={["Store definitions.\nLearn pronunciations.\nDiscover synonyms."]} typeSpeed={45} />
          </p>
        </div>
        <div className="w-full flex justify-center ">
          {isLoaded && <WordCard word={defaultWords} onDelete={() => alert('Cannot delete default word!')}></WordCard>}
        </div>
        <div>
          <Button onClick={handleSignIn} type="submit" variant="contained" className="capitalize" size="large">
            Get Started
          </Button>
        </div>
      </div>
      {/* Desktop View */}
      <div className="h-screen zeroWidth:hidden lg:flex">
        <div className="basis-3/5	xs:px-4 sm:px-9 lg:px-20 flex flex-col justify-center">
          <div className="mb-7 basis-2/5 flex flex-col justify-end">
            <p className="text-7xl">New Words at Your Fingertips.</p>
          </div>
          <div className="text-4xl basis-3/5">
            <p className="whitespace-pre md:min-h-40">
              <ReactTyped strings={["Store definitions.\nLearn pronunciations.\nDiscover synonyms."]} typeSpeed={45} />
            </p>
            <div className="mt-7">
              <Button onClick={handleSignIn} type="submit" variant="contained" className="parent-capitalize w-40 h-14" size="large">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex justify-center items-center content-center">
          {isLoaded && <WordCard word={defaultWords} onDelete={() => alert('Cannot delete default word!')}></WordCard>}
        </div>
      </div>
    </div>
  )
}
