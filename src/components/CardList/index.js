import React, { useState, useRef } from "react";
import DynamicCard from "../DynamicCard";

const CardList = ({ cardInfo }) => {
  const { id, boxtitle, boxtext, defaultcards, cards } = cardInfo;

  const [count, setcount] = useState(defaultcards);
  const inputtext = useRef(null);

  const blur = (e) => {
    setcount(e.target.value.replace(/\D/, ""));
  };

  const handleClick = () => {
    setcount(inputtext.current.value.replace(/\D/, ""));
  };

  const renderContent = (cards) => {
    return cards && cards.length >= count
      ? cards.slice(0, count).map((card) => {
          return <DynamicCard key={card.id} card={card} />;
        })
      : cards
          .slice(0, cards.length)
          .map((card) => <DynamicCard key={id} card={card} />);
  };

  return (
    <div className="main">
      <h2 className="title">{boxtitle}</h2>
      <div className="titleinfo">{boxtext}</div>
      <div className="row cards">{renderContent(cards)}</div>
      <div className="row addcard">
        <div className="col-sm-1 col-lg-3">
          <button className="btn-outline-danger rounded" onClick={handleClick}>
            Read more
          </button>
          <input
            className="text"
            ref={inputtext}
            type="text"
            text={count}
            onBlur={(e) => blur(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardList;

CardList.defaultProps = {
  id: 0,
  boxtitle: "",
  boxtext: "",
  defaultcards: 0,
  cards: [],
};
