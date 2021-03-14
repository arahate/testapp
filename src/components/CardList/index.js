import React, { useState, useRef } from "react";
import DynamicCard from "../DynamicCard";
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PropTypes from "prop-types";

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
    <Container fluid>
      <h2 className="text-left pt-5 text-danger">{boxtitle}</h2>
      <p className="text-left">{boxtext}</p>
      <Row className="flex-wrap">{renderContent(cards)}</Row>
      <Row className="d-flex justify-content-end pt-3 flex-row">
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-danger" onClick={handleClick}>
                Read more
              </Button>
            </InputGroup.Prepend>
            <FormControl
              ref={inputtext}
              onBlur={(e) => blur(e)}
              className="ml-2"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

CardList.defaultProps = {
  id: 0,
  boxtitle: "",
  boxtext: "",
  defaultcards: 0,
  cards: [],
};

CardList.propTypes = {
  cardInfo: PropTypes.shape({
    id: PropTypes.number,
    boxtitle: PropTypes.string,
    boxtext: PropTypes.string,
    defaultcards: PropTypes.number,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        cardDate: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        buttonText: PropTypes.string,
        color: PropTypes.string,
      })
    ),
  }),
};

export default CardList;
