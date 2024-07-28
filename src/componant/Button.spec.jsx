/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import Button from '../../src/components/Button'; // Adjust the path as needed

describe('<Button />', () => {
  it('mounts and handles click event', () => {
    const handleClick = cy.stub();
    mount(<Button label="Click Me" onClick={handleClick} />);
    cy.get('h1').should('have.text', '0')
    cy.wrap(handleClick).should('have.been.calledOnce');
  });
});
