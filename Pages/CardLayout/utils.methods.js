import { selectors as layout } from './selectors'
import { selectors as slider } from '../Slider/selectors'

export const editIssueTypeColor = (issueType, hexColor) => {
    cy.wait(3000)
    //click Edit Card Layout button
    cy.jget(slider.editCardLayout).should('be.visible').click()
    cy.jcontains('Card Color Settings').should('be.visible').click()
    //click Edit Color btn
    cy.jget(layout.table)
        .contains(issueType)
        .siblings('td')
        .find(layout.editColor)
        .should('be.visible')
        .click().wait(1500)
    //select color
    cy.jget(layout.layoutList.color(hexColor)).should('be.visible').click().wait(500)
    cy.jget(layout.layoutList.select).should('be.visible').click().wait(1000)
    //save changes 
    cy.jget(layout.save).should('be.visible').click()
}