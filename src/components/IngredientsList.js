import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const IngredientsList = React.createClass({

  propTypes: {
    selectedRecipes: React.PropTypes.array.isRequired
  },

  render () {
    const allIngredients = this.props.selectedRecipes.reduce((ingredients, recipe) => {
      if (recipe == null) return ingredients;
      return ingredients.concat(recipe.ingredients);
    }, []);
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
