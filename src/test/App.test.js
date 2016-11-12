/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import recipes from '../recipes.json';

const sessionStorageMock = (() => {
  var store = {};
  return {
    getItem (key) {
      const value = store[key] != null ? store[key] : null;
      return value;
    },
    setItem (key, value) {
      store[key] = value.toString();
    },
    clear () {
      store = {};
    }
  };
})();
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

let wrapper;
describe('Test IngredientsList component', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    wrapper = mount(<App />);
  });
  it('Displays ingredients when recipe is selected', () => {
    const checkbox = wrapper.find('input[type="checkbox"]').first();
    checkbox.simulate('change');
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });
  it('Displays no ingredients when no recipe is selected', () => {
    expect(wrapper.find('li').length).toBe(0);
  });
  it('Has a search text input', () => {
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });
  it('Filters list of recipes when search term is typed', () => {
    const searchInput = wrapper.find('input[type="text"]');
    searchInput.simulate('change', {target: { value: 'Water' }});
    expect(wrapper.find('tr').length).toBeLessThan(recipes.length);
  });
  it('Restores selected recipes after refresh', () => {
    const checkbox = wrapper.find('input[type="checkbox"]').first();
    checkbox.simulate('change');
    wrapper.update();
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });
});
