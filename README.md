DataScience's Frontend Code Test
==================

This is an at-home exercise that we use as part of our standard interview process for frontend and full-stack developers.

## Instructions

* Clone this repo
* Complete the exercise and submit either a zip of the solution or a link to a new repo
* You may use any resources, frameworks, libraries, etc and style the markup however you like.

## Requirements

Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:

* Display a list (or table) of recipes.
* Allow filtering of recipes by a single ingredient.
* Add checkboxes to allow selection of multiple recipes.
* Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.
* Persist the selections locally and regenerate the view on page refresh.
* In a README note any required setup to be able to run the app, such as modifying hosts file, etc.

## Running

A live version of the site is available [here](http://ivanph.github.io/frontend-code-test)

This app was bootstraped with [create-react-app](https://github.com/facebookincubator/create-react-app).
Most of this is straight from the project's README.

First install all dependencies by running

```sh
npm install
```

Once install is completed you can use any of the following scripts.

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changes since the last commit.

To run all test press `a` when prompted

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

