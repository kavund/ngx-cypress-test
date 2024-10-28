describe('Steps page', ()=>{
    it('should show valid title on each step', ()=>{
        const containerSelector = 'nb-card-body nb-stepper.horizontal[orientation="horizontal"]'

        cy.get(`${containerSelector} h3`).should('have.text', "Step content #1")
        cy.get(`${containerSelector} [type="submit"]`).click()

        cy.get(`${containerSelector} h3`).should('have.text', "Step content #2")
        cy.get(`${containerSelector} [type="submit"]`).click()

        cy.get(`${containerSelector} h3`).should('have.text', "Step content #3")
        cy.get(`${containerSelector} [type="submit"]`).click()

        cy.get(`${containerSelector} h3`).should('have.text', "Step content #4")
        cy.get(`${containerSelector} [type="submit"]`).should('be.disabled')
    });
});