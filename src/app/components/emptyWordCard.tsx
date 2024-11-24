import { useState } from 'react'
import { EmptyWordCardProps } from '../types/emptyWordCardProps';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function WordCard({onAdd}: EmptyWordCardProps) {
    const [placeholder, setPlaceHolder] = useState('Add a word');
    const [newWord, setNewWord] = useState('')

    const handleAdd = () => {
        if (newWord.trim()) { 
          onAdd(newWord.toLowerCase())
          setNewWord('')
        }
      };
    
    const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAdd()
        }
    }
    const handleOnSearch = () => {
        handleAdd()
    }

    return (
            <div className="flex justify-start items-center text-black flex-col bg-white zeroWidth:w-96 xl:w-[290px] p-3 rounded-lg zeroWidth:h-44 md:h-52 lg:h-44 xl:h-[350px] 
                shadow-sm">
                <div className={`relative flex flex-col justify-evenly xl:justify-start w-full w-full h-full bg-white items-center rounded-lg`}>
                    <form className='flex flex-col justify-start h-[32px] pr-5'>
                        <input
                            type="text"
                            onChange={(e) => setNewWord(e.target.value)}
                            value={newWord}
                            placeholder={placeholder}
                            className={`text-2xl text-center w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-500`}
                            onFocus={() => setPlaceHolder('')}
                            onBlur={() => setPlaceHolder('Add a word')}
                            onKeyDown={handleEnterPress}
                        />
                    </form>
                    <Tooltip title="Search for word">
                        <IconButton onClick={handleOnSearch} size="small" className="button-absolute zeroWidth:-right-2 xl:-right-2 zeroWidth:top-2 xl:top-1 flex"> 
                            <SearchIcon fontSize="inherit"/>
                        </IconButton>
                    </Tooltip>
                <hr className="my-2 border-t-1 border-black w-full hidden xl:block" />
                </div>
            </div>
    )
}