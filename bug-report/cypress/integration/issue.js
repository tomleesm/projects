describe('單一 issue 相關的測試', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('新增一個 issue', () => {
    cy.get('[data-cy=new-issue]').click()

    cy.url().should('include', '/issues/create')
  })
})
