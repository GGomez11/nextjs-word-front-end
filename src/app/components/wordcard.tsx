'use client'

import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { WordCardProps } from "../types/wordCardProps";


export default function WordCard({className = '', word}: WordCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [displayedDefinition, setDisplayedDefinition] = useState(word.results[0])
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const handleNextDefinition = (event: Event) => {
        event.stopPropagation();
        if (currentIndex + 1 < word.results.length) {
            setDisplayedDefinition(word.results[currentIndex+1])
            setCurrentIndex(currentIndex+1)        
        }
    }
    const handlePreviousDefinition = (event: Event) => {
        event.stopPropagation();
        if (currentIndex - 1 >= 0) {
            setDisplayedDefinition(word.results[currentIndex-1])
            setCurrentIndex(currentIndex-1)
        }
    }


    return (
        <div onClick={handleFlip} className={`${className} word-card flex zeroWidth:w-96 xl:w-[290px] text-black flex-col bg-white px-4 rounded-lg w-full zeroWidth:h-44 md:h-52 lg:h-44 xl:h-[350px] xl:p-3
       shadow-sm cursor-pointer transition-transform duration-1000 delay-1500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className={`relative flex flex-col justify-evenly xl:justify-start w-full w-full h-full bg-white items-center rounded-lg  ${isFlipped ? 'hidden' : ''}`}>
                {!displayText &&
                    <span className="absolute zeroWidth:-left-2 xl:left-0 zeroWidth:top-2 xl:top-0">{currentIndex+1}/{word.results.length}</span>
                }
                {!displayText &&
                <Tooltip title="Remove word">
                    <IconButton onClick={handleDelete} size="small" className="absolute zeroWidth:-right-2 xl:right-0 zeroWidth:top-2 xl:top-0 flex"> 
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </Tooltip>
                }
                <div>
                    {!displayText && <h1 className="text-xl zeroWidth:text-base sm:text-xl md:text-2xl">{word.word}</h1>}
                </div>
                {!displayText && <hr className="my-2 border-t-1 border-black w-full hidden xl:block" /> }
                <div className="flex w-fit justify-center overflow">
                    {!displayText && <p className="zeroWidth:text-base">{displayedDefinition.definition}</p>}
                </div>
                {!displayText && word.results.length > 1 && <div><IconButton onClick={handlePreviousDefinition} className="absolute zeroWidth:top-1/3 xl:top-2/4 -left-1 arrows"> 
                    <ArrowBack fontSize="inherit"/>
                </IconButton>
                <IconButton onClick={handleNextDefinition} className="absolute zeroWidth:top-1/3 xl:top-2/4 -right-1 arrows"> 
                    <ArrowForward fontSize="inherit"/>
                </IconButton>
                </div>
                }
            </div>
            <div className={`w-full h-full bg-white flex justify-center items-center rounded-lg rotate-y-180 ${isFlipped ? '' : 'hidden'}`}>
                {displayText && 
                <div>
                    <p className="text-black zeroWidth:text-base sm:text-xl">Synonym: 'bantam', 'flyspeck', 'lilliputian', 'midget', 'petite', 'tiny'</p>
                    <p className="text-black zeroWidth:text-base sm:text-xl">Pronunciation: {word.pronunciation}</p>
                </div>
                } 
            </div> 
        </div>
    )
}