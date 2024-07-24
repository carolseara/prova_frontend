class HomePage {
    visit() {
      cy.visit('https://site.getnet.com.br/');
    }
  
    clickMenuAjuda() {
      cy.get('#gnt-burger').click(); // Clique no botão do menu
      cy.get('[data-toggle="gnt-nav-menu-depth2"]').contains('Ajuda').click(); // Clique na opção Ajuda
      cy.get('#menu-ajuda-sou-cliente-central-ajuda').click();
      cy.get('#faq-search-input').type('Boleto'); // Digitar 'Boleto' no campo de busca
      cy.get('.c-search-dropdown')
        .should('not.have.class', 'u-hidden') // Verifica que o dropdown não tem a classe 'u-hidden'
        .should('be.visible'); // Verifica que o dropdown está visível
    
      cy.get('.c-search-dropdown')
         .find('.c-search-dropdown__response')
         .should('be.visible'); // Verifica que a resposta está visível
    
      cy.get('.c-search-dropdown')
        .find('.c-search-dropdown__response a')
        .eq(1)
        .click(); // Clica no segundo link na lista de respostas
    
      cy.get('.is-modal-open').should('be.visible'); // Verifica que a modal está visível
    
      cy.get('.is-modal-open')
        .contains('O boleto será enviado para seu endereço de e-mail registrado em Cadastro, ou aquele digitado no momento da negociação.'); // Verifica que o texto específico está presente na modal
    }
     
}
  
export default HomePage;
  