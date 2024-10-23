import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}