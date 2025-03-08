import { useState } from 'react';

function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <h2>{card.question}</h2>
      </div>
      <div className="card-back">
        <h2>{card.answer}</h2>
      </div>
    </div>
  );
}

export default Card;
