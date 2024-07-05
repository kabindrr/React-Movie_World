import React from "react";
import { MovieCart } from "./MovieCart";

export const Display = () => {
  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <div
              className="btn-group d-flex mb-3 gap-3"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger rounded">
                All Movies
              </button>
              <button type="button" className="btn btn-warning rounded">
                Horror
              </button>
              <button type="button" className="btn btn-success rounded">
                Action
              </button>
              <button type="button" className="btn btn-secondary rounded">
                Drama
              </button>
              <button type="button" className="btn btn-info rounded">
                SCI-FI
              </button>
            </div>
            <div className="mt-3 text-white text-center">2 Movies listed</div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col d-flex flex-wrap gap-2 justify-content-around">
            {new Array(10).fill("").map((item, i) => (
              <div className="" key={i}>
                {/* <MovieCart /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
