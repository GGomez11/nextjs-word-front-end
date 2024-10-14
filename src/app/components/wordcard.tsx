'use client'

import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { WordCardProps } from "../types/wordCardProps";

export default function WordCard({className = '', word}: WordCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    
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
        <div onClick={handleFlip} className={`${className} flex text-black flex-col bg-white px-4 rounded-lg w-full zeroWidth:h-44 md:h-36 lg:h-44 md:h-52
       shadow-sm cursor-pointer transition-transform duration-1000 delay-1500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className={`relative flex flex-col justify-evenly w-full w-full h-full bg-white items-center rounded-lg  ${isFlipped ? 'hidden' : ''}`}>
                {!displayText &&
                <Tooltip title="Remove word">
                    <IconButton onClick={handleDelete} size="small" className="absolute -right-2 top-2 flex"> 
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </Tooltip>
                }
                <div>
                    {!displayText && <h1 className="text-xl zeroWidth:text-base sm:text-xl md:text-2xl">{word.word}</h1>}
                </div>
                <div className="flex w-fit justify-center overflow">
                    {!displayText && <p className="zeroWidth:text-base">{word.definition}</p>}
                </div>
            </div>
            <div className={`w-full h-full bg-white flex justify-center items-center rounded-lg rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
                {displayText && <p className="text-black zeroWidth:text-base sm:text-xl">Back Side</p>} 
            </div> 
        </div>
    )
}