import React from "react";
import { shallow } from "enzyme";
import FilterBar from "./filter_bar";

// describe what we are testing
describe("Filter Bar", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <FilterBar
          genres={[]}
          defaultRating={3}
          handleRatingChange={() => {}}
          handleGenreChange={() => {}}
        />
      )
        .find("div")
        .exists()
    ).toBe(true);
  });
});
