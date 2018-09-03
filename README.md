This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction

The Movie Zone is a Code Challenge Solution for Zone Digital - Movie listings challenge:

https://github.com/zone/frontend/blob/master/challenges/movie-listings.md

This solution uses React, ES6 and Material UI to provide a simple component based approach.

## Solution Architecture

#### UX
The UX of the application is driven by Material UI: https://material-ui.com/
This provides a responsive Grid based layout that allowed me to develop a clean design quickly.
Some of the Material Components I used were:
* Grid
* AppBar
* Toolbar
* Typography
* RaisedButton
* Card
* CardMedia
* CardContent


The React application consists of the following components.

#### Movie Zone Container
```
src/container/movie-zone.container.js
```
A Class Component that contains all the logic of the application. 
This is where you should start looking at the application. The data is fetched here from the API end points and
sorted and filtered for display. 

#### Movie  List
```
src/components/movie_list.js
```
A functional component that displays a list of Movie Cards in a Grid structure. 
The Movie List component only shows movies that have an active flag equal to true.

#### Movie Card
```
src/components/movie_card.js
```
A functional component that displays a single movies data including the movie poster,
image, title, rating and genres.

#### Filter Bar
```
src/components/filter_bar.js
```
A functional component that displays two filters. One is a Genre list of checkboxes 
and the other is a slider to change the Rating of the movies in the results set.
The slider uses a component called rc-slider. https://www.npmjs.com/package/rc-slider

## Installation instructions
```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Includes some very basic tests for functional components.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
