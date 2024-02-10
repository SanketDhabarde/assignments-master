import { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

interface Social {
  title: string;
  link: string;
}

interface Card {
  id: number;
  name: string;
  description: string;
  interests: string[];
  socials: Social[];
}

const CARDS: Card[] = [
  {
    id: 1,
    name: "Sanket Dhabarde",
    description: "Software engineer",
    interests: ["anime", "gym", "music"],
    socials: [
      {
        title: "linkedIn",
        link: "https://www.linkedin.com/in/sanketdhabarde/",
      },
      { title: "Twitter", link: "https://twitter.com/SanketDhabarde1" },
    ],
  },
];

function App() {
  const [cards, setCards] = useState(CARDS);
  return (
    <div>
      {cards.map(({ name, description, interests, socials }) => (
        <Card
          name={name}
          description={description}
          interests={interests}
          socials={socials}
        />
      ))}
    </div>
  );
}

export default App;
