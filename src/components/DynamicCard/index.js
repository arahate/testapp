import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DynamicCard = ({ card }) => {
  const { cardDate, title, description, buttonText, color } = card;
  return (
    <Col sm={4}>
      <Card style={{ backgroundColor: `${color}` }} className="my-3">
        <Card.Header className="border-bottom-0">
          <h5>{cardDate}</h5>
          <h1 className="text-left">{title}</h1>
        </Card.Header>
        <Card.Body className="text-left pt-3 overflow-auto">
          <p className="text-left">{description}</p>
        </Card.Body>
        <Card.Footer className="border-top-0">
          <Button variant="outline-light">{buttonText}</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

DynamicCard.propTypes = {
  cardInfo: PropTypes.shape({
    cardDate: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    color: PropTypes.string,
  }),
};

DynamicCard.defaultProps = {
  cardDate: "",
  title: "",
  description: "",
  buttonText: "",
  color: "",
};

export default DynamicCard;
