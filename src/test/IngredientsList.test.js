/* eslint-env jest */

import React from 'react';
import { render } from 'enzyme';
import IngredientsList from '../components/IngredientsList';
import recipes from '../recipes.json';

const props = {
  selectedRecipes: recipes.slice(0, 5)
};
const uniqueIngredients = 32;

let wrapper;
describe('Test IngredientsList component', () => {
  beforeEach(() => {
    wrapper = render(<IngredientsList {...props} />);
  });

  it('Has a ul element', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });
  it('Has a li item for each unique ingredient', () => {
    expect(wrapper.find('li').length).toBe(uniqueIngredients);
  });
});

