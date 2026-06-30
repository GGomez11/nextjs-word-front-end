import { useEffect, useState } from "react";
import { Word } from "../types/word";
import { authenticatedFetch } from "../utils/doFetch";
import { User } from "firebase/auth";

export function useWords({ user }: { user: User | null }) {
  const [words, setWords] = useState<Word[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchWords = async () => {
    if (user === null) {
      console.log("Delete error:");
      return;
    }

    try {
      const response = await authenticatedFetch("/api/words/", undefined, user);
      const data = await response.json();
      setWords(data.words);
      setIsLoaded(true);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const addWord = async (word: string) => {
    if (
      words &&
      words.length > 0 &&
      words.some(
        (word_in_list) => word_in_list.word.toLowerCase() == word.toLowerCase(),
      )
    ) {
      alert("Words already exists in your vocabulary");
      return;
    }

    if (user === null) {
      return;
    }

    try {
      const response = await authenticatedFetch(
        "/api/words",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ word: word }),
        },
        user,
      );
      if (!response.ok) {
        alert("Failed to add word.");
        return;
      }
      const updatedWords = await response.json();
      setWords(updatedWords.words);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const onDelete = async (wordName: string) => {
    if (user === null) {
      console.log("Delete error:");
      return;
    }
    try {
      const response = await authenticatedFetch(
        "/api/words/" + wordName,
        {
          method: "DELETE",
        },
        user,
      );
      const updatedWords = words.filter((word) => word.word !== wordName);
      setWords(updatedWords);
    } catch (error) {
      console.log("Delete error:", error);
    }
  };
  useEffect(() => {
    if (user) {
      fetchWords();
    }
  }, [user]);

  return { words, addWord, onDelete };
}
