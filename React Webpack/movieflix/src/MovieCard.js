import React from "react";

import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <div className="image-container">
          <img
            alt="Furiosa: A Mad Max Saga"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/furiosa-a-mad-max-saga-et00377865-1712650113.jpg"
          />
        </div>
        <div className="movie-details-container">
          <h1>Furiosa: A Mad Max Saga</h1>
          <div className="rating-box">
            <div className="rating-inner-container">
              <p>8.4/10 (14.8K votes)</p>
            </div>
            <button className="rate-btn">Rate Now</button>
          </div>

          <div className="screen-details">
            <p>2D , 2D SCREEN X , MX4D , 4DX , IMAX 2D , ICE</p>
          </div>
          <div className="lang-details">
            <p>English , Hindi , Telugu , Tamil</p>
          </div>
          <div className="genre">
            2h 28m • Action , Sci-Fi , Thriller • A • 23 May, 2024
          </div>

          <button>Book Tickets</button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
