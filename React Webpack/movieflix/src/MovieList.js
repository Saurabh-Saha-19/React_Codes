import React from "react";
import MovieCard from "./MovieCard.js";

import "./MovieList.css";

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        <MovieCard />
      </div>
    );
  }
}

export default MovieList;
