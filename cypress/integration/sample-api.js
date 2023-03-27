// sample-api.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('sample API', () =>
{
    it('Check for Guinness Extra Stout in ales', () => {
        cy.visit('https://sampleapis.com/api-list/beers')        
        cy.log('Visited Beers/ale')

        cy.request('https://api.sampleapis.com/beers/ale').as('ale');

        // cy.get("@ale").its("body").should((response) => {            
        //     expect(response).to.be.a('array');            
        //     expect(response).to.include(
        //         name: 'Guinness Extra Stout'
        // )
        // })

        cy.get("@ale").its("body").should(items => {
            expect(items.map(i=>i.name)).to.include('Guinness Extra Stout')
        })
    });

    it('Check for Asahi in stouts (negative)', () => {
        cy.visit('https://sampleapis.com/api-list/beers')        
        cy.log('Visited Beers/stouts')

        cy.request('https://api.sampleapis.com/beers/stouts').as('stouts');

        // cy.get("@ale").its("body").should((response) => {            
        //     expect(response).to.be.a('array');            
        //     expect(response).to.include(
        //         name: 'Guinness Extra Stout'
        // )
        // })

        cy.get("@stouts").its("body").should(items => {
            expect(items.map(i=>i.name)).to.not.include('Asahi')
        })
    });
})