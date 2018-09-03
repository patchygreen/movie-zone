import React from "react";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./movie_card";
import PropTypes from "prop-types";

/**
 * MovieList displays a list of MovieCards with active flag == true
 * @param props - genres - Array of Genres objects.
 * @param props - movies - Array of Movies objects.
 * @returns {*}
 */
const MovieList = props => {
  function getGenreNamesFromIds(genreIds) {
    let genreNames = [];
    // Loop through an array of genre Ids from a movie and find it's
    // name in the genres array.
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
