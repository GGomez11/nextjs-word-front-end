export interface Word {
    word: string,
    results: [{
        definition: string,
        synonym?: string,
    }]
    pronunciation?: string,
}