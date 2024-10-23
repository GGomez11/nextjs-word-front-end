import React from 'react';
import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
    searchQuery: string,
    setSearchQuery: setQuery: Dispatch<SetStateAction<string>>,
}