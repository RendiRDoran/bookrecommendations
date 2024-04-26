import { useState } from "react";
import "./styles.css";

const bookDB = {
  fantasy: [
    {
      name: "A Court of Thorns and Roses",
      author: "Sarah J Maas",
      description:
        "A young woman is taken from her homeland to a fae world after killing a general who worked for the High Lord of the Spring Court.",
    },
    {
      name: "Jade City",
      author: "Fonda Lee",
      description:
        "Two clans are caught in a war over the city they both want control over.",
    },
    {
      name: "Fourth Wing",
      author: "Rebecca Yaaros",
      description:
        "A young woman finds herself fighting for her life and heart in the Rider's Quandrant.",
    },
  ],
  biographies: [
    {
      name: "The Rise of Theodore Roosevelt",
      author: "Edmund Morris",
      description:
        "A beautiful work about the political rise of President Theodore Roosevvelt.",
    },
    {
      name: "1776",
      author: "David McCullough",
      description:
        "A harrowing work about the American Revolution in the year 1776.",
    },
    {
      name: "Churchill",
      author: "Andrew Roberts",
      description:
        "A reverent telling of Winston Churchill's work as the Prime Minister of Britain during the second World War.",
    },
  ],
  fiction: [
    {
      name: "Dracula",
      author: "Bram Stoker",
      description: "A book about a man who is a Vampire named Count Dracula.",
    },
    {
      name: "The Hobbit",
      author: "J. R. R. Tolkein",
      description:
        "A young Hobbit finds himself sucked into an adventure with strange friends.",
    },
    {
      name: "Frankenstein",
      author: "Mary Shelley",
      description: "A doctor pieces together a monster from body parts.",
    },
  ],
  horror: [
    {
      name: "The Hunger",
      author: "Alma Katsu",
      description:
        "A fictional retelling of the Donner Party crossing the West.",
    },
    {
      name: "The Only Good Indians",
      author: "Stephen Graham Jones",
      description:
        "Follows the lives of four different Native American Men. Their youth left them with haunting memories and fears that turn real.",
    },
    {
      name: "It Rides a Pale Horse",
      author: "Andy Marino",
      description:
        "A crime horror novel about a man named Lark who is trying to find his sister who has been abducted.",
    },
  ],
  scifi: [
    {
      name: "Dune",
      author: "Frank Herbert",
      description:
        "A story of a boy on a far off planet whose family is betrayed.",
    },
    {
      name: "The Giver",
      author: "Lois Lowry",
      description:
        "A boy named Jonas learns the truth about his idyllic community.",
    },
    {
      name: "Farenheit 451",
      author: "Ray Bradbury",
      description:
        "The story of a fireman in a dystopian society that must hoard books in his home lest they be destroyed.",
    },
  ],
};

export default function App() {
  const [category, setCategory] = useState("fantasy");

  function bookClickHandler(book) {
    setCategory(book);
  }

  return (
    <div className="App">
      <h1>
        <span>🛎️</span>Recommend To Me!<span>🛎️</span>
      </h1>
      <p>What will your next read be? Press the button and you will see!</p>
      {Object.keys(bookDB).map((cat) => (
        <button
          onClick={() => bookClickHandler(cat)}
          style={{
            margin: "0.5rem 0.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
            border: "2px solid black",
            background: "inherit",
            color: "black",
            cursor: "pointer",
          }}
        >
          {cat}
        </button>
      ))}
      <hr />
      <ul>
        {bookDB[category].map((item) => (
          <li
            style={{
              listStyleType: "none",
              margin: "2rem",
              borderRadius: "1rem",
              border: "2px solid black",
              padding: "0rem 1rem",
              textAlign: "left",
              lineHeight: "normal",
            }}
          >
            <h3>{item.name}</h3>
            <h4>{item.author}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
