import { Word } from "./word";

export interface WordCardProps {
    showTouchIcon?: boolean;
    word: Word;
    onDelete: (word: string) => void;
}