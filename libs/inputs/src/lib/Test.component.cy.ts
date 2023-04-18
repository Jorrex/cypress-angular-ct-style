import { TestComponent } from './Test.component';

describe('abc', () => {
    it('should mount', () => {
        cy.mount(TestComponent);
    });
});