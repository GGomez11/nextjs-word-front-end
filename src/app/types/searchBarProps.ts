import React from 'react';

export interface SearchBarProps {
    query: string,
    setQuery: setQuery: React.Dispatch<React.SetStateAction<string>>;
}