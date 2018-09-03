import React from "react";
import PropTypes from 'prop-types';
import Checkbox from "material-ui/Checkbox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

/**
 * FilterBar displays two filter tools for users to filter movies by Genre and Rating
 * @param props - defaultRating - The default rating for the rating slider.
 * @param props - genre - Array of Genre objects.
 * @param props - handleRatingChange - Event Handler from parent component for rating slider onChange events.
 * @param props - handleGenreChange - Event Handler from parent component for Genre Checkbox onChange events.
 * @returns {*}
 */
const FilterBar = props => {

  const genreList = props.genres.map(genre => {
    if (genre.active) {
      return (
        <div key={genre.id.toString()}>
          <div>
            <Checkbox
              type="checkbox"
              label={genre.name}
              onCheck={() => props.handleGenreChange(genre.id)}
            />
          </div>
        </div>
      );
    }
  });

  return (
    <div style={{ width: "250px" }}>
      <h2>Filter Movies</h2>
      <p>Filter By Genre: </p>
      {genreList}
      <p>Filter By Rating: </p>
      <div style={{ width: "190px", margin: "0 auto" }}>
        <Slider
          min={0}
          max={10}
          marks={{ 0: "0", 2.5: "2.5", 5: "5", 7.5: "7.5", 10: "10" }}
          step={0.5}
          dots={false}
          defaultValue={props.defaultRating}
          onChange={e => props.handleRatingChange(e)}
        />
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  genres: PropTypes.array.isRequired,
  defaultRating: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleGenreChange: PropTypes.func.isRequired
};

export default FilterBar;
