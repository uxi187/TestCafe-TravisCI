import { selectors as slider } from './selectors'
import { selectors as form } from '../SetUpNewKanbanBoard/selectors'

import * as utilsWelcome from '../Welcome/utils.methods'

export const saveAndGoToViewDashboardMode = () => {
    cy.jget(slider.saveBoard).should('be.visible').click()
    return cy.jget(slider.editBoard).should('not.be.disabled').and('be.visible').click()
}

export const goToViewDashboardMode = () => {
    return cy.jget(slider.editBoard).should('be.visible').click()
}

export const goToEditDashboardMode = () => {
    return cy.jget(slider.editBoard).focus().should('be.visible').click()
}

export const goToEditKanbanBoardFromDashboardList = (dashboardName) => {

    // select Kanban Board to edit
    utilsWelcome.selectDashboardOnDashboardList(dashboardName)
        .should('be.visible')
        .click()

    cy.jget(slider.editKanbanBoard).should('be.visible').click()
    //wait until Kanban Board Name and Kanban Board Location fields to be visible
    cy.jget(form.step4item.kanban_board_field).should('be.visible')
    cy.jget(form.step4item.kanban_board_placeholder).should('be.visible')

    cy.jget(form.step2aitem.existing_proj_location_field).should('be.visible')
    cy.jget(form.step2aitem.existing_proj_location_placeholder).should('be.visible')
}

export const editKanbanBoardFromDashboard = (dashboardName) => {

    cy.jget(slider.editKanbanBoard).should('be.visible').click()
    //wait until Kanban Board Name and Kanban Board Location fields to be visible
    cy.jget(form.step4item.kanban_board_field).should('be.visible')
    cy.jget(form.step4item.kanban_board_placeholder).should('be.visible')

    cy.jget(form.step2aitem.existing_proj_location_field).should('be.visible')
    cy.jget(form.step2aitem.existing_proj_location_placeholder).should('be.visible')
}