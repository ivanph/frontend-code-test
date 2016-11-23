import React from 'react';
import { FormControl } from 'react-bootstrap';
import RecipesTable from './components/RecipesTable';
import IngredientsList from './components/IngredientsList';
import recipesModel from './recipes.json';
import storage from './storage';
const recipesWithSelected = recipesModel.map(recipe => Object.assign(recipe, {selected: false}));

const App = React.createClass({

  getInitialState () {
    return {
      currentRecipes: recipesWithSelected
    };
  },

  componentDidMount () {
    const savedSelectedRecipes = JSON.parse(storage.get('selectedRecipes'));
    this.setState({currentRecipes: savedSelectedRecipes || recipesWithSelected});
  },

  onChecked (index, recipe, state) {
    let currentRecipes = this.state.currentRecipes;
    currentRecipes[index].selected = state;
    storage.save('selectedRecipes', JSON.stringify(currentRecipes));
    this.setState({ currentRecipes });
  },

  onFilterChanged (e) {
    const searchTerm = e.target.value.toLowerCase();
    // Using some() we check if the ingredient matches the
    // search term and filter() generates a new array with only
    // the recipes that match.
    const currentRecipes = recipesWithSelected.filter(recipe => {
      return recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });
    this.setState({ currentRecipes });
  },

  render () {
    return (
      <div className='container' style={{ marginTop: '50px' }} >
        <FormControl
          type='text'
          onChange={this.onFilterChanged}
          placeholder='Filter by ingredients...' />
        <RecipesTable
          recipes={this.state.currentRecipes}
          onChecked={this.onChecked} />
        <IngredientsList
          recipes={this.state.currentRecipes} />
      </div>
        );
  }
});

module.exports = App;
