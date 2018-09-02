import React from "react";
import { shallow } from "enzyme";
import MovieCard from "./movie_card";

// describe what we are testing
describe("Movie Card", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <MovieCard
          title={"Test Movie"}
          poster={"test"}
          genreNames={[]}
          rating={8}
        />
      )
        .find("div")
        .exists()
    ).toBe(true);
  });
});
