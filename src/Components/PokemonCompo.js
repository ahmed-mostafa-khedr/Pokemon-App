import React from "react";
import { Card, Container } from "react-bootstrap";
import shortid from "shortid";
const PokemonCompo = ({ pokemon }) => {
  return (
    <>
      <Container>
        {pokemon.map((p) => (
          <Card
            key={shortid.generate()}
            className="my-1"
            style={{ width: "100%" }}
          >
            <Card.Body>
              <Card.Title>- {p.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default PokemonCompo;
