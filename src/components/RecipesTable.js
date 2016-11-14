import React from 'react';
import { Table } from 'react-bootstrap';
import Row from './Row';

const RecipesTable = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
    onChecked: React.PropTypes.func.isRequired
  },

  render () {
    const recipesRows = this.props.recipes.map((recipe, index) => {
      return (
        <Row
          index={index}
          key={`recipe${index}`}
          checked={this.props.recipes[index].selected}
          recipe={recipe}
          onChecked={this.props.onChecked} />
          );
    });
    return (
      <div>
        <div className='page-header'>
          <h1>Recipes</h1>
        </div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cook Time</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {recipesRows}
          </tbody>
        </Table>
      </div>
      );
  }
});

module.exports = RecipesTable;
