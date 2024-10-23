'use client'

import WordCard from "./components/wordCard";
import Button from '@mui/material/Button';
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const storeDefinitionsMobile = useRef(null);
  const storeDefinitionsDesktop = useRef(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  let word =  {
    word: 'Diminutive',
    id: 1,
    results: [
        {
            definition: 'very small',
            partOfSpeech: 'adjective',
            synonym: 'bantam, flyspeck, lilliputian, midget, petite, tiny',
        },
        {
            definition: 'a word that is formed with a suffix (such as -let or -kin) to indicate smallness',
            partOfSpeech: 'noun'
        }
    ],
    pronunciation: `dɪ'mɪnjətɪv`,
};

  useEffect(() => {
    const typed = new Typed(storeDefinitionsMobile.current, {
      strings: ['Store definitions.\nLearn pronunciations.\nFind synonyms.'],
      typeSpeed: 50,
      showCursor: false
    });

    const typed1 = new Typed(storeDefinitionsDesktop.current, {
      strings: ['Store definitions.\nLearn pronunciations.\nFind synonyms.'],
      typeSpeed: 50,
      showCursor: false
    });

    return () => {
      typed.destroy();
    }
  }, [status, router])

  const handleClick = () => {
    if (session) {
      router.push('/home')
    } else {
      signIn('google', {callbackUrl: '/home'});
    }
  }

  const onDelete = (id:number) => {
    
}

  return (
    <div className="h-screen">
      {/* Mobile View */} 
      <div className="h-screen zeroWidth:flex flex-col justify-evenly items-center lg:hidden">
        <div className="zeroWidth:flex flex-col justify-center md:items-start items-center xs:px-4 sm:px-9 lg:px-20 lg:hidden">
          <p className="text-2xl xs:text-3xl sm:text-5xl 2xl:text-7xl mb-1">New Words at your fingertips.</p>
          <p className="zeroWidth:hidden md:block lg:hidden md:min-h-28 md:text-3xl 2xl:text-6xl whitespace-pre" ref={storeDefinitionsMobile}> </p>
        </div>
        <div className="w-full flex justify-center ">
          <WordCard word={word} onDelete={() => onDelete(word.id)}></WordCard>
        </div>
        <div>
            <Button onClick={handleClick} type="submit" variant="contained" className="capitalize" size="large">
              Get Started 
            </Button>
        </div>
      </div>
      {/* Desktop View */} 
      <div className="h-screen zeroWidth:hidden lg:flex">
        <div className="basis-3/5	xs:px-4 sm:px-9 lg:px-20 flex flex-col justify-center">
          <div className="mb-7 basis-2/5 flex flex-col justify-end">
            <p className="text-7xl">New Words at your fingertips.</p>
          </div>
          <div className="text-4xl basis-3/5">
            <p className="whitespace-pre md:min-h-40" ref={storeDefinitionsDesktop}></p>
            <div className="mt-7">
              <Button onClick={handleClick} type="submit" variant="contained" className="capitalize w-40 h-14" size="large">
                Get Started 
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-2/5 flex flex-col justify-center content-center">
          <WordCard word={word} onDelete={() => onDelete(word.id)}></WordCard>
        </div>
      </div>
    </div>
  )
}
