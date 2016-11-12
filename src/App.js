import React from 'react';
import { FormControl } from 'react-bootstrap';
import RecipesTable from './components/RecipesTable';
import IngredientsList from './components/IngredientsList';
import recipesModel from './recipes.json';

const App = React.createClass({

  getInitialState () {
    return {
      selectedRecipes: [],
      recipes: recipesModel
    };
  },
  onChecked (index, recipe, state) {
    let selectedRecipes = this.state.selectedRecipes;
    selectedRecipes[index] = state ? recipe : null;
    this.setState({ selectedRecipes });
  },

  onFilterChanged (e) {
    const searchTerm = e.target.value.toLowerCase();
    const recipes = recipesModel.filter(recipe => {
      for (let ingredient of recipe.ingredients) {
        if (ingredient.toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
    this.setState({ recipes });
  },

  render () {
    return (
      <div className='container' style={{ marginTop: '50px' }} >
        <FormControl
          type='text'
          onChange={this.onFilterChanged}
          placeholder='Filter by ingredients...' />
        <RecipesTable
          recipes={this.state.recipes}
          selectedRecipes={this.state.selectedRecipes}
          onChecked={this.onChecked} />
        <IngredientsList
          selectedRecipes={this.state.selectedRecipes} />
      </div>
        );
  }
});

module.exports = App;
