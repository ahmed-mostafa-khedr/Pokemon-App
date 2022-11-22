import React from "react";
import { Button, Container } from "react-bootstrap";

const PaginationCompo = ({ goToPrev, goToNext, prevPage }) => {
  return (
    <>
      {prevPage == null ? (
        <Button className="d-block  my-5 mx-auto" onClick={goToNext}>
          Next Page
        </Button>
      ) : (
        <Container className="d-flex  my-5 justify-content-center">
          <Button variant="secondary" className="mx-2" onClick={goToPrev}>
            Prev Page
          </Button>
          <Button variant="success" onClick={goToNext}>
            Next Page
          </Button>
        </Container>
      )}
    </>
  );
};

export default PaginationCompo;
