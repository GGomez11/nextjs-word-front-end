'use client'

import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WordCard({className = ''}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    
    const words = [
        {
            'word': 'Dog',
            'defintion': 'a domesticated carnivorous mammal that has a long snout, an acute  ...',
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

    const handleDelete = (event: Event) => {
        event.stopPropagation();
        console.log('handle delete')
    }


    return (
        <div onClick={handleFlip} className={`${className} flex text-black flex-col bg-white p-4 rounded-lg zeroWidth:w-4/5 md:w-4/5 lg:w-4/5 zeroWidth:h-44 md:h-36 lg:h-44 md:h-52 p-5
       shadow-sm cursor-pointer transition-transform duration-1000 delay-1500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className={`relative flex flex-col justify-evenly w-full w-full h-full bg-white items-center rounded-lg  ${isFlipped ? 'hidden' : ''}`}>
                {!displayText &&
                <IconButton onClick={handleDelete} size="small" className="absolute -right-2 top-0 flex"> 
                   <DeleteIcon fontSize="inherit"/>
                </IconButton>}
                <div>
                    {!displayText && <h1 className="text-xl zeroWidth:text-base sm:text-xl md:text-2xl">{word.word}</h1>}
                </div>
                <div className="flex w-fit justify-center overflow">
                    {!displayText && <p className="zeroWidth:text-base">{word.defintion}</p>}
                </div>
            </div>
            <div className={`w-full h-full bg-white flex justify-center items-center rounded-lg rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
                {displayText && <p className="text-black zeroWidth:text-base sm:text-xl">Back Side</p>} 
            </div> 
        </div>
    )
}