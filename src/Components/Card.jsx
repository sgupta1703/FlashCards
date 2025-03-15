import { useState } from 'react';

function Card({ card, updateStreak }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFeedback('');
    setUserGuess('');
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = () => {
    if (userGuess.trim() === '') {
      setFeedback('⚠️ Please enter an answer.');
      return;
    }

    const correctAnswer = card.answer.toLowerCase().trim();
    const userAnswer = userGuess.toLowerCase().trim();

    const isCorrect = userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer);

    if (isCorrect) {
      setFeedback('✅ Correct!');
      updateStreak(true);
    } else { 
      setFeedback('❌ Incorrect. Try again!');
      updateStreak(false); 
    }
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {!isFlipped ? (
          <div className="card-front">
            <h2>{card.question}</h2>
          </div>
        ) : (
          <div className="card-back">
            <h2>{card.answer}</h2>
          </div>
        )}
      </div>

      <div className="user-input">
        <input
          type="text"
          placeholder="Enter your guess..."
          value={userGuess}
          onChange={handleGuessChange}
          disabled={isFlipped}
          className="input-box"
        />
        <button onClick={handleSubmit} disabled={isFlipped} className="submit-btn">Submit</button>
        <p className="feedback">{feedback}</p>
      </div>
    </div>
  );
}

export default Card;
