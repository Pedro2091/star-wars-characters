import { Character } from "./Character";

export interface CharacterResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}
