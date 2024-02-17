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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");

  function createCardHandler() {
    const newCard = {
      id: cards.length + 1,
      name,
      description,
      interests: interests.split(";"),
      socials: [
        {
          title: "linkedIn",
          link: linkedIn,
        },
        { title: "Twitter", link: twitter },
      ],
    };
    setCards([...cards, newCard]);
  }

  return (
    <>
      <div className="user-input">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Desciption"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={interests}
          placeholder="Add ; seprate interensts"
          onChange={(e) => setInterests(e.target.value)}
        />
        <input
          type="text"
          value={linkedIn}
          placeholder="LinkedIn"
          onChange={(e) => setlinkedIn(e.target.value)}
        />
        <input
          type="text"
          value={twitter}
          placeholder="Twitter"
          onChange={(e) => setTwitter(e.target.value)}
        />
        <button onClick={createCardHandler}>Create Card</button>
      </div>
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
    </>
  );
}

export default App;
