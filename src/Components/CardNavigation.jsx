function CardNavigation({ onNext, onPrev }) {
    return (
      <div className="card-navigation">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    );
  }
  
  export default CardNavigation;
  