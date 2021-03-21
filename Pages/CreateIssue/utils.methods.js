
import { selectors as createIssue } from './selectors'

export const createJiraIssue = ({ title, description }) => {
    cy.get(createIssue.summary).should('be.visible').type(title)
    cy.get(createIssue.description).should('be.visible').type(description)
    return cy.get(createIssue.create).should('be.visible').click()
}