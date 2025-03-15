import { useState, useEffect } from 'react';
import Card from './components/Card';
import CardNavigation from './Components/CardNavigation';
import CardList from './Components/CardList';
import './App.css';

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

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

  const updateStreak = (isCorrect) => {
    if (isCorrect) {
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
        return newStreak;
      });
    } else {
      setStreak(0); 
    }
  };

  return (
    <div className="app">
      <h1 className="title">CS Flashcards</h1>
      <h4>Study React and JS from these flashcards!!!</h4>
      <h4>Total Cards: {shuffledCards.length}</h4>
      <h4>🔥 Streak: {streak} | 🏆 Longest Streak: {longestStreak}</h4>

      {shuffledCards.length > 0 && (
        <Card 
          card={shuffledCards[currentCard]} 
          updateStreak={updateStreak}
        />
      )}

      <CardNavigation onNext={nextCard} onPrev={prevCard} />
    </div>
  );
}

export default App;
