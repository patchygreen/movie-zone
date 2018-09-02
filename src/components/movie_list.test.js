import React from "react";
import { shallow } from "enzyme";
import MovieList from "./movie_list";

// describe what we are testing
describe("Movie List", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <MovieList
          movies={[]}
          genres={[]}
        />
      )
        .find("div")
        .exists()
    ).toBe(true);
  });
});
