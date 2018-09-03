import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RaisedButton from "material-ui/RaisedButton";
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterBar from "../components/filter_bar";
import MovieList from "../components/movie_list";
import { getTopMovies, getGenres } from "../common/movie-service.helper";

/**
 * Retrieve data on Movies now Playing and Movie Genres from the TMDb.
 * For each movie (20 are returned per page) set an active flag of true|false on it
 * based on user defined Rating or Genre criteria.
 */
class MovieZoneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      filterDrawerOpen: false,
      ratingValue: 3,
      genreFilter: [],
      isLoading: true
    };
    // Manual bind events in React.
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  componentDidMount() {
    // Component mounted so now fetch data.
    getTopMovies()
      .then(data => {
        // Set an active flag on each movie initially and check it is above default rating.
        let movies = data.results.map(movie => {
          movie.vote_average >= this.state.ratingValue
            ? (movie.active = true)
            : (movie.active = false);
          return movie;
        });

        // Sort by popularity descending
        movies = movies.sort((a, b) => {
          return b.popularity - a.popularity;
        });
        // Set movies in component state.
        this.setState({ movies });
      })
      .then(() => {
        getGenres().then(data => {
          // Genres get an active flag of true/false.
          // Only active flags will be displayed.
          let genres = data.genres.map(genre => {
            genre.active = true;
            return genre;
          });
          genres = this.setActiveGenres(genres);
          // Set genres in component state and switch isLoading flag to false as we have the data now.
          this.setState({ genres, isLoading: false });
        });
      })
      .catch(error => console.error(error));
  }

  // Filter genres to only show those that are present in search results.
  setActiveGenres(genres) {
    let activeGenres = [];
    // Get all possible Genres that are used in each movie result.
    this.state.movies.forEach(movie => {
      movie.genre_ids.forEach(genre => activeGenres.push(genre));
    });
    // Ensure all activeGenres are unique
    activeGenres = [...new Set(activeGenres)];
    // Set an active flag of false if the genre id isn't included in activeGenres
    return genres.map(genre => {
      if (!activeGenres.includes(genre.id)) {
        genre.active = false;
      }
      return genre;
    });
  }

  /**
   * Event handler for user Rating changes.
   */
  handleRatingChange(rating) {
    const ratingValue = parseFloat(rating);
    this.setState({ ratingValue }, () => this.filterMovies());
  }

  /**
   * Event handler for user generated Genre changes.
   * Add or remove Genre Ids from the this.state.genreFilter
   */
  handleGenreChange(genreId) {
    let genreFilter = this.state.genreFilter;
    const genreIdInt = parseInt(genreId, 10);

    // Check if genreId is included in genreFilter already
    if (!genreFilter.includes(genreIdInt)) {
      // Add this genreId to genreFilter
      genreFilter.push(genreIdInt);
    } else {
      // Remove this genreId from genreFilter
      const index = genreFilter.indexOf(genreIdInt);
      genreFilter.splice(index, 1);
    }
    // Set updated genreFilter in component state and then call filterMovies.
    this.setState({ genreFilter },
      () => this.filterMovies()
    );
  }

  /**
   * Filter this.state.movies array based on user defined Rating and Genre selection.
   * An active true|false flag is set on all movies to determine which movies are displayed.
   */
  filterMovies() {
    const movies = this.state.movies.map(movie => {
      this.state.ratingValue > movie.vote_average ||
      (this.state.genreFilter.length > 0 &&
        movie.genre_ids.filter(
          genre => this.state.genreFilter.indexOf(genre) > -1
        ).length !== this.state.genreFilter.length)
        ? (movie.active = false)
        : (movie.active = true);
      return movie;
    });
    this.setState({ movies });
  }

  /**
   * Toggle the filter drawer.
   */
  handleFilterDrawerToggle = () =>
    this.setState({ filterDrawerOpen: !this.state.filterDrawerOpen });

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <CircularProgress color="secondary" />
        </div>
      );
    }
    return (
      <div>
        <Drawer variant="persistent" open={this.state.filterDrawerOpen}>
          <RaisedButton
            label="Hide Filters"
            secondary={true}
            onClick={this.handleFilterDrawerToggle}
          />
          <FilterBar
            genres={this.state.genres}
            defaultRating={3}
            handleRatingChange={this.handleRatingChange}
            handleGenreChange={this.handleGenreChange}
          />
        </Drawer>
        <div>
          <AppBar position={"static"}>
            <Toolbar>
              <RaisedButton
                label="Filter"
                secondary={true}
                onClick={this.handleFilterDrawerToggle}
              />
              <Typography
                variant="title"
                color="inherit"
                style={{ position: "absolute", right: "5%" }}
              >
                Movie Zone: Most Popular
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            <Grid container spacing={24} style={{ marginTop: 20, padding: 24 }}>
              <MovieList
                movies={this.state.movies}
                genres={this.state.genres}
              />
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieZoneContainer;
