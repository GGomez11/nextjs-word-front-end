import { Word } from "./word";

export interface WordCardProps {
    className?: string;
    word: Word;
    onDelete: (id: number) => void;
}