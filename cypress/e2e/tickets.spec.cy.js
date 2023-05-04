describe('TICKETS', () => {
  beforeEach(() => cy.visit('https://bit.ly/2XSuwCW'));
   
  it("fills all the text input fields", () => {
    const url = 'https://bit.ly/2XSuwCW'
    const firstName = 'Jhonatan'
    const lastName = 'Simoura'
    const email = 'jhonatan.simoura@gmail.com'
    const requests = 'vegetarian'
    const fullName = `${firstName} ${lastName}`


    cy.visit(url)
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type(email)
    cy.get('#requests').type(requests)
    cy.get('#signature').type(fullName) // Obtem o elemento pela id = '#' | Obtem o elemento pela class = '.'

   });

   it("select two tickets", () => {
    cy.get("#ticket-quantity").select("2");
   });

   it("select 'vip' ticket type", () => { 
    cy.get("#vip").check();
   });

   it("selects 'social media' checkbox", () => { 
    cy.get("#social-media").check();
   });

   it("select 'friend', and 'publication', then uncheck 'frind'", () => {
    cy.get("#friend").check();
    cy.get("#publication").check();
    cy.get("#publication").uncheck();

   });
  
  it("has 'TICKETBOX' header's heading", () => { 
    cy.get("header h1").should("contain", "TICKETBOX");
  });
  it("alesrt on invalid email", () => {
    cy.get("#email")
    .as("email")
    .type("talkingabouttsting-gmail.com")
    
    cy.get("#email.invalid").should('exist');

    cy.get("@email")
    .clear()
    .type("talkingabouttsting@gmail.com");

    cy.get("#email.invalid").should("not.exist");
    });

    it("fills and reset the form",  () => { 
      const firstName = 'Jhonatan';
      const lastName = 'Simoura';
      const fullName = `${firstName} ${lastName}`

      cy.get('#first-name').type(firstName);
      cy.get('#last-name').type(lastName);
      cy.get ("#email").type("talkingabouttsting@gmail.com")
      cy.get("#ticket-quantity").select("2")
      cy.get("#vip").check()
      cy.get("#friend").check()
      cy.get('#requests').type("IPA beer")

      cy.get(".agreement p").should(
        'contain', 
      `I, ${fullName}, wish to buy 2 VIP tickets.`
      ); 

      cy.get("#agree").click();
      cy.get("#signature").type(fullName);

      cy.get("button[type='submit']")
      .as("submitButton")
      .should("not.be.disabled");

      cy.get("button[type='reset']").click();

      cy.get("@submitButton").should("be.disabled");
  });

it("fills mandatory fields using support command", () => {
  const customer = {
    firstName:"joão",
    lastName:"silva",
    email:"joaosilva@example.com"
};
cy.fillMandatoryFields(customer); 

cy.get("button[type='submit']")
  .as("submitButton")
  .should("not.be.disabled");

cy.get("#agree").uncheck();

cy.get("@submitButton").should("be.disabled");
});

it("fills mandatory fields using support command", () => {
  const customer ={
   firstName: "joão",
   lastName: "Silva",
   email: "joaosilva@example.com"
  };

  cy.fillMandatoryFields(customer);

  cy.get("button[type='submit']")
  .as("submitButton")
  .should("not.be.disabled");

  cy.get("#agree").uncheck();

  cy.get("@submitButton").should("be.disabled");
});
});
