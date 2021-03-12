import React from "react";

const DynamicCard = ({ card }) => {
  const { cardDate, title, description, buttonText, color } = card;
  return (
    <div className="col-sm-4">
      <div className="card" style={{ backgroundColor: `${color}` }}>
        <div className="card-header">
          <h5>{cardDate}</h5>
          <h1 className="card-title">{title}</h1>
        </div>
        <div className="card-body scroll">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href="/" className="btn btn-outline-light">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;

DynamicCard.defaultProps = {
  cardDate: "",
  title: "",
  description: "",
  buttonText: "",
  color: "",
};
