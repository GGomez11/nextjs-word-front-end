'use client'

import { useState } from 'react';
import { SearchBarProps } from '../types/searchBarProps';

export default function SearchBar({searchQuery, setSearchQuery}: SearchBarProps) {
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    };
    
    return (
        <div className='basis-36 flex flex-col justify-center items-center w-full'>
            <form className='zeroWidth:w-3/4 md:w-'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search your vocabulary."
                    className="p-2 border w-full text-black bg-greyAccent border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
        </div>
    )
}