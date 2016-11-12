import React from 'react';

const Row = React.createClass({

  propTypes: {
    index: React.PropTypes.number.isRequired,
    recipe: React.PropTypes.object.isRequired,
    onChecked: React.PropTypes.func.isRequired,
    checked: React.PropTypes.bool.isRequired
  },

  checkIt () {
    this.props.onChecked(this.props.index, this.props.recipe, !this.props.checked);
  },

  render () {
    const recipe = this.props.recipe;
    return (
      <tr>
        <td><input type='checkbox' onChange={this.checkIt} checked={this.props.checked} /></td>
        <td>{recipe.name}</td>
        <td>{recipe.type}</td>
        <td>{recipe.cook_time}</td>
        <td>{recipe.ingredients.join(', ')}</td>
      </tr>
    );
  }
});

module.exports = Row;
