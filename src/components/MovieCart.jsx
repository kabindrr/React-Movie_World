import React from "react";
import { Button } from "react-bootstrap";

export const MovieCart = ({ searchedMovie }) => {
  //   if (!searchedMovie) {
  //     return null;
  //   }
  const { Poster, Title, imdbRating, Plot } = searchedMovie;
  return (
    <div>
      <div className="container">
        <div className="row bg-light border rounded text-dark p-3 movie-card-item">
          <div className="col-md">
            <img src={Poster} alt="" />
          </div>
          <div className="col-md">
            <h3>{Title}</h3>
            <p>IMDB Rating:{imdbRating}</p>
            <p>{Plot?.slice(0, 90) + "......."}</p>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <Button className="btn btn-warning m-2">Drama</Button>
            <Button className="btn btn-success m-2">Action</Button>
          </div>
          <div className="d-grid mt-3">
            <Button className="btn btn-danger m-2">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
