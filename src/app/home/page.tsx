"use client";

import WordCard from "../components/wordCard";
import SearchBar from "../components/searchBar";
import EmptyWordCard from "../components/emptyWordCard";
import { useState, useMemo, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { useWords } from "../hooks/useWords";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, loading } = useAuth();
  const { words, addWord, onDelete } = useWords({ user });

  const filteredCards = useMemo(
    () =>
      words?.filter((card) =>
        card.word.toLocaleLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [words, searchQuery],
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please sign in to view this content</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid zeroWidth:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredCards?.map((word: any, index: number) => (
          <div
            key={index}
            className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full"
          >
            <WordCard word={word} onDelete={() => onDelete(word.word)} />
          </div>
        ))}
        <div className="p-5 zeroWidth:min-w-[350px] sm:min-w-[400px] md:min-w-[400px] xl:min-w-[350px] flex flex-row justify-center w-full">
          <EmptyWordCard onAdd={addWord} />
        </div>
      </div>
    </div>
  );
}
