import { cyan } from "color-name";

describe('Test Lambda Eats', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/pizza')
    })
    it('Can input names', function(){
        cy.get('[data-cy=name]').type('Testing type added');
    });
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox1').check().should('be.checked');
    })
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox2').check().should('be.checked');
    })
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox3').check().should('be.checked');
    })
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox4').check().should('be.checked');
    })
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox5').check().should('be.checked');
    })
    it('We can select multiple toppings', function(){
        cy.get('[data-cy=checkbox6').check().should('be.checked');
    })
    it('We can submit form', function(){
        cy.get('[data-cy=submit]').submit
    })
});