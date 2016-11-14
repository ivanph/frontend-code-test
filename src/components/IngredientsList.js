import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const IngredientsList = React.createClass({

  propTypes: {
    recipes: React.PropTypes.array.isRequired
  },

  render () {
    // Reduce the array of recipes to a single array of only ingredients
    // for the recipes marked as selected
    const allIngredients = this.props.recipes.reduce((ingredients, recipe) => {
      if (!recipe.selected) return ingredients;
      return ingredients.concat(recipe.ingredients);
    }, []);
    // Creates an array of ingredients from a Set
    // which will only contain unique values
    const uniqueIngredients = Array.from(new Set(allIngredients)).sort();
    const listItems = uniqueIngredients.map(ingredient => <ListGroupItem key={ingredient}>{ingredient}</ListGroupItem>);
    return (
      <div>
        <div className='page-header'>
          <h1>Ingredients</h1>
        </div>
        <ListGroup>
          {listItems}
        </ListGroup>
      </div>
    );
  }
});

module.exports = IngredientsList;
