/* eslint-env jest */

import React from 'react';
import { render } from 'enzyme';
import RecipesTable from '../components/RecipesTable';
import recipes from '../recipes.json';

const props = {
  recipes: recipes,
  onChecked: jest.fn(),
  selectedRecipes: []
};

let wrapper;

describe('Test RecipesTable component', () => {
  beforeEach(() => {
    wrapper = render(<RecipesTable {...props} />);
  });

  it('Has a table body ', () => {
    expect(wrapper.find('tbody').length).toBe(1);
  });
  it('Has a row for each recipe plus headers', () => {
    expect(wrapper.find('tr').length).toBe(recipes.length + 1);
  });
});

