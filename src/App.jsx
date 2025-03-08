import { useState, useEffect } from 'react'
import Card from './components/Card'
import CardNavigation from './Components/CardNavigation'
import CardList from './Components/CardList'
import './App.css'

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setShuffledCards(shuffle([...CardList])); 
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % shuffledCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
  };

  return (
    <div className="app">
      <h1 className="title">CS Flashcards</h1>
      <h4>Total Cards: {shuffledCards.length}</h4>
      {shuffledCards.length > 0 && <Card card={shuffledCards[currentCard]} />}
      <CardNavigation onNext={nextCard} onPrev={prevCard} />
    </div>
  );
}

export default App;
