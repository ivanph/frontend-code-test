/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Row from '../components/Row';
import recipes from '../recipes.json';
const props = {
  index: 1,
  recipe: recipes[0],
  onChecked: jest.fn(),
  checked: false
};

let wrapper;

describe('Test row component', () => {
  beforeEach(() => {
    wrapper = shallow(<Row {...props} />);
  });

  it('Has a table row', () => {
    expect(wrapper.find('tr').length).toBe(1);
  });
  it('Has 5 table cells', () => {
    expect(wrapper.find('td').length).toBe(5);
  });
  it('Has an input checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').length).toBe(1);
  });
  it('onChecked is called after clicking checkbox', () => {
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(props.onChecked).toHaveBeenCalled();
  });
});

