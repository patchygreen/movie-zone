import React from "react";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./movie_card";
import PropTypes from "prop-types";

const MovieList = props => {
  function getGenreNamesFromIds(genreIds) {
    let genreNames = [];
    genreIds.forEach(genreId => {
      const genreName = props.genres.find(genre => {
        return genre.id === genreId;
      });
      if (genreName && genreName.name) {
        genreNames.push(genreName.name);
      }
    });
    return genreNames;
  }

  return (
    <div>
      <Grid container spacing={24} style={{ padding: 24, width: "100%" }}>
        {props.movies.map((movie, i) => {
          if (movie.active) {
            const genreNames = getGenreNamesFromIds(movie.genre_ids);
            return (
              <Grid key={i} item xs={12} sm={6} lg={4} xl={3}>
                <MovieCard
                  title={movie.title}
                  rating={movie.vote_average}
                  poster={movie.poster_path}
                  genreNames={genreNames}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

MovieList.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

export default MovieList;
