/// <reference types="cypress" />


Given('Estou logado na Amazon', () => {
  cy.loginAmazon()

})

When('Adiciono multiplos produtos ao carrinho', ()=> {
    cy.get('#twotabsearchtextbox').type('fire stick{enter}', {force:true})
    cy.get('[data-asin] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(3) > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .first().click()
    cy.get('#add-to-cart-button').click()

});
