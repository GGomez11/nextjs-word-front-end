'use client'

import { useState } from "react"

export default function WordCard() {
    const words = [
        {
            'word': 'Dog',
            'defintion': 'a domesticated carnivorous mammal that typically has a long snout, an acute  ...',
        },
        {
            'word': 'Ephemeral',
            'defintion': 'lasting for a very short time',
        }
    ]
    const [word, setWord] = useState(words[0])
    let counter = 0
    setInterval(() => {
    }, 2000)
    
    return (
        <div className="flex text-black flex-col bg-white rounded-lg zeroWidth:w-2/3 md:w-3/5 lg:w-4/5 h-44 md:h-52 p-5
         hover:bg-slate-50 shadow-sm transition delay-1500 cursor-pointer">
            <div className="flex justify-center w-full">
                <h1 className="text-xl md:text-2xl">{word.word}</h1>
            </div>
            <div className="flex w-fit justify-center mt-4 px-2 overflow">
                <p>
                    {word.defintion}
                </p>
            </div>
        </div>
    )
}