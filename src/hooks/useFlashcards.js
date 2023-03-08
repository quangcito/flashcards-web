import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "App", back: "Short for application. Refers to programs that can run on smartphones and tablets."},
    { id: 2, front: "App development cycle", back: "Identify need or want, survey target users, design the app, develop it, test it, deploy it." },
    { id: 3, front: "User Interface", back: "The way the user interacts or uses the app - the screen(s) of the app." },
    { id: 4, front: "IDE", back: "An Integrated Development Environment, like AppInventor, that is used to design, develop, test and maintain apps." },
    { id: 5, front: "Two main parts of AppInventor", back: "Designer - where components are added to the app. Blocks Editor - where the behavior of the app is programmed." },
    { id: 6, front: "Sprite", back: "A two-dimensional image or animation that is part of a larger scene." },
    { id: 7, front: "Event", back: "An action in an app such as a button getting pressed, a line being drawn or a picture being taken." },
    { id: 8, front: "Event Handler", back: "Tells the app what to do when a particular event occurs." },
    { id: 9, front: "Properties of Components", back: "Characteristics of components such as font size, color, radius, speed, interval." },
    { id: 10, front: "Getter blocks", back: "React Component has a lifecycle, which can be monitored and manipulated during its phases. The phases of lifecycle in React Component are: Mounting, Updating & Unmounting." },
    { id: 11, front: "Setter blocks", back: "Used to set values such as the text of a label or the speed of a sprite." },
    { id: 12, front: "Variable", back: "Container for a value" },
    { id: 13, front: "List", back: "A set of items or values that belong together." },
    { id: 14, front: "Index", back: "Gives the position of an item in a list." },
    { id: 15, front: "Variable", back: "Set of instructions that perform a specific task and are often used repeatedly in an app." },
];

const FLASHCARDS_KEY = 'flashcards';

function getStorageFlashcards() {
    const cards = localStorage.getItem(FLASHCARDS_KEY);
    return JSON.parse(cards) || INITIAL_FLASHCARDS;
}

export function useFlashcards() {
    const [flashCards] = useState(getStorageFlashcards);

    useEffect(() => localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashCards)), [flashCards]);

    return [flashCards];
}
