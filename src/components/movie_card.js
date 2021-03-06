import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

/**
 * Display a Movie Card with movie information including Poster Image, Title, Rating and Genres.
 */
const MovieCard = props => {
  const imageSrc = `https://image.tmdb.org/t/p/w500/${props.poster}`;
  return (
    <div>
      <Card style={{ minWidth: "300px" }}>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={imageSrc}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom component="title">
            {props.title}
          </Typography>
          <Typography component="p">Rating: {props.rating}</Typography>
          <Typography component="p">
            {props.genreNames.map((genre, i) => (
              <Button
                key={i}
                variant="contained"
                size="small"
                color="secondary"
                style={{ margin: "10px 10px 0px 0" }}
              >
                {genre}
              </Button>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  rating: PropTypes.number.isRequired,
  genreNames: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MovieCard;
