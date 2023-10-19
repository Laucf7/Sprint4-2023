declare const btn: HTMLButtonElement;
declare const jokeContainer: HTMLDivElement;
declare const radioButtons: NodeListOf<Element>;
declare let currentJoke: any;
declare const reportJokes: Joke[];
declare function bringJoke(): void;
declare function createJoke(respuestaJson: any): void;
interface Joke {
    joke: string;
    score: number | null;
    date: string;
}
declare function saveScoreDate(): void;
