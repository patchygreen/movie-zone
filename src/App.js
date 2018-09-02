import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MovieZoneContainer from "./container/movie-zone.container";

class App extends Component {
  render() {
    return (
      // Pass Material UI down to all child components.
      <MuiThemeProvider>
        <MovieZoneContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
