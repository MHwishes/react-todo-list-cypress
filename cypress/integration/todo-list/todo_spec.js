describe('todo-list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has title', () => {
    cy.get('h1')
      .should('contain', 'Todo List');
  });

  it('should add todo', () => {
    const newTodo = 'a new todo';
    cy.get('.new-todo')
      .type(newTodo).should('have.value', newTodo);
    cy.contains('新增')
      .click();
    cy.get('.list-group li')
      .should('have.length', 4)
      .and('contain', newTodo);
  });

  it('should delete todo', () => {
    cy.get('.list-group li')
      .get('.delete')
      .first()
      .click();
    cy.get('.list-group li')
      .should('have.length', 2);
  });
});
