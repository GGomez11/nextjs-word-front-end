export interface Word {
    word: string,
    results: [{
        definition: string,
        synonym?: string,
        partOfSpeech: string,
    }]
    pronunciation?: string,
}