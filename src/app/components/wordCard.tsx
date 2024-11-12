'use client'

import { useState, useRef } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import DeleteIcon from '@mui/icons-material/Delete';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Tooltip from '@mui/material/Tooltip';
import { WordCardProps } from "../types/wordCardProps";
import type { MouseEvent } from 'react';
import DOMPurify from 'dompurify';


export default function WordCard({className = '', word, onDelete}: WordCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [displayedDefinition, setDisplayedDefinition] = useState(word.results[0])
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(new Audio(word.pronunciation?.audioURL));

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

    const handleNextDefinition = (event: MouseEvent) => {
        event.stopPropagation();
        if (currentIndex + 1 < word.results.length) {
            setDisplayedDefinition(word.results[currentIndex+1])
            setCurrentIndex(currentIndex+1)        
        }
    }
    const handlePreviousDefinition = (event: MouseEvent) => {
        event.stopPropagation();
        if (currentIndex - 1 >= 0) {
            setDisplayedDefinition(word.results[currentIndex-1])
            setCurrentIndex(currentIndex-1)
        }
    }

    const handleDelete = (event: MouseEvent) => {
        event?.stopPropagation();
        onDelete(word.word)
    }

    const togglePlay = (event: MouseEvent) => {
        event.stopPropagation();
        audioRef.current.play();
    }

    return (
        <div onClick={handleFlip} className={`${className} word-card flex zeroWidth:w-96 xl:w-[290px] text-black flex-col bg-white px-4 rounded-lg w-full zeroWidth:h-44 md:h-52 lg:h-44 xl:h-[350px] xl:p-3
       shadow-sm cursor-pointer transition-transform duration-1000 delay-1500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className={`relative flex flex-col justify-evenly xl:justify-start w-full w-full h-full bg-white items-center rounded-lg  ${isFlipped ? 'hidden' : ''}`}>
                {!displayText && (
                    <>
                    {/* Header */}
                    <div>
                        <span className="absolute zeroWidth:-left-2 xl:left-0 zeroWidth:top-2 xl:top-1">{currentIndex+1}/{word.results.length}</span>
                        <Tooltip title="Remove word">
                            <IconButton onClick={handleDelete} size="small" className="button-absolute zeroWidth:-right-2 xl:-right-2 zeroWidth:top-2 xl:top-1 flex"> 
                                <DeleteIcon fontSize="inherit"/>
                            </IconButton>
                        </Tooltip>
                        <h1 className="zeroWidth:text-xl md:text-2xl">{word.word}</h1>
                        <span className="absolute zeroWidth:bottom-1 xl:bottom-0 zeroWidth:right-0">({displayedDefinition?.partOfSpeech})</span>
                    </div>
                    <hr className="my-2 border-t-1 border-black w-full hidden xl:block" />
                    {/* Body of card */}
                    <div className="flex w-fit justify-center overflow-auto no-scrollbar mb-[24px]">
                        <p className="zeroWidth:text-base">{displayedDefinition?.definition}</p>
                    </div>
                    </>)
                }
                {/* Arrows */}
                {!displayText && word.results.length > 1 && 
                <>
                    <IconButton onClick={handlePreviousDefinition} className="button-absolute zeroWidth:top-1/3 xl:top-2/4 -left-1 arrows"> 
                        <ArrowBack fontSize="inherit"/>
                    </IconButton>
                    <IconButton onClick={handleNextDefinition} className="button-absolute zeroWidth:top-1/3 xl:top-2/4 -right-1 arrows"> 
                        <ArrowForward fontSize="inherit"/>
                    </IconButton>
                </>
                }
            </div>
            {/* Back of card */}
            <div className={`w-full h-full bg-white flex justify-center items-end rounded-lg rotate-y-180 zeroWidth:p-2 ${isFlipped ? '' : 'hidden'}`}>
                {displayText && 
                <div className="flex flex-col h-full">
                    <div className="text-black zeroWidth:text-base basis-2/4">
                        <span>Pronunciation: {word.pronunciation?.written}</span>
                        <IconButton onClick={togglePlay}>
                            <VolumeUpIcon></VolumeUpIcon>
                        </IconButton>
                    </div>
                    <div>
                    {displayedDefinition.synonym?.map((item, index) => (
                        <div className="text-black zeroWidth:text-base basis-2/4">
                            {index == 0 && <p dangerouslySetInnerHTML={{ __html: "Synonym(s): " + DOMPurify.sanitize(item) }}></p>}
                            {index != 0 && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}></p>}
                        </div>
                    ))}
                    </div>
                </div>
                } 
            </div> 
        </div>
    )
}