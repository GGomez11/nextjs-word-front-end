import React from 'react';

export interface SearchBarProps {
    searchQuery: string,
    setSearchQuery: setQuery: React.Dispatch<React.SetStateAction<string>>;
}