import './commands'

Cypress.Server.defaults({
    delay: 500,
    force404: false,
    whitelist: (xhr) => {
      // handle custom logic for whitelisting
      return true;
    }
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

  //Essa é uma configuração para que o Cypress não retorne erro, quando não possui nenhuma ação no teste case