import "./App.css";
import { React, useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import PockemonCompo from "./Components/PokemonCompo";
import PaginationCompo from "./Components/PaginationCompo";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  //handle Requesr
  const CancelToken = axios.CancelToken;
  let cancel;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(currentPage, {
          cancelToken: new CancelToken((c) => {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
        })

        .then((response) => {
          setLoading(false);
          setErr(false);
          setPokemon(response.data.results);
          setPrevPage(response.data.previous);
          setNextPage(response.data.next);
        })
        .catch((error) => {
          setLoading(false);
          setErr(true);
          console.log(error);
        });
      return () => cancel();
    }, 200);
  }, [currentPage]);
  const goToPrev = () => {
    setCurrentPage(prevPage);
  };
  const goToNext = () => {
    setCurrentPage(nextPage);
  };
  //handle Request time
  if (loading)
    return (
      <Alert
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50% , -50%)",
        }}
        className=" w-100 container"
        variant="dark"
      >
        Loading..
        <Spinner
          className="mx-2 text-dark"
          style={{ width: "15px", height: "15px" }}
        ></Spinner>
      </Alert>
    );
  //handle Request errors
  if (err)
    return (
      <Alert
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50% , -50%)",
        }}
        className=" w-100 container"
        variant="dark"
      >
        Connection error !
      </Alert>
    );
  return (
    <>
      <PaginationCompo
        prevPage={prevPage}
        goToPrev={goToPrev}
        goToNext={goToNext}
      />
      <PockemonCompo pokemon={pokemon} />
    </>
  );
}

export default App;
