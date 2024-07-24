import HomePage from '../support/pages/HomePage';

describe('Acessar o site GetNet e utilizar menu de ajuda', () => {
  const homePage = new HomePage();

  it('Acessar a página inicial e clicar no Menu de Ajuda', () => {
    homePage.visit();
    homePage.clickMenuAjuda();
  });

  

  
});