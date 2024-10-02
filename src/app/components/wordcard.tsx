'use client'

import { useState } from "react"

export default function WordCard({className = ''}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    
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
    
    const handleFlip = () => {
        // Prevent further flips until the animation is done
        if (isFlipping) return; 
        
        setIsFlipping(true);
        setIsFlipped((prev) => !prev);
        setTimeout(() => {
            setDisplayText((prev) => !prev);
            setIsFlipping(false);
        }, 400);
    };

    return (
        <div onClick={handleFlip} className={`${className} flex text-black flex-col bg-white p-4 rounded-lg zeroWidth:w-4/5 md:w-3/5 lg:w-4/5 h-44 md:h-52 p-5
       shadow-sm cursor-pointer transition-transform duration-1000 delay-1500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className={`flex flex-col justify-evenly w-full w-full h-full bg-white items-center rounded-lg  ${isFlipped ? 'hidden' : ''}`}>
                <div>
                    {!displayText && <h1 className="text-xl zeroWidth:text-base md:text-2xl">{word.word}</h1>}
                </div>
                <div className="flex w-fit justify-center overflow">
                    {!displayText && <p className="zeroWidth:text-base">{word.defintion}</p>}
                </div>
            </div>
            <div className={`w-full h-full bg-white flex justify-center items-center rounded-lg rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
                {displayText && <p className="text-black zeroWidth:text-base">Back Side</p>} 
            </div> 
        </div>
    )
}