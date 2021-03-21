import * as utilsWelcome from '../Welcome/utils.methods'

import { selectors as slider } from '../Slider/selectors';
import { selectors as form } from './selectors'

export const editKanbanBoard = (props) => {
    const { dashboardName, newDashboardName, filter, status, projectLocation, additionalDataSource } = props

    utilsWelcome.selectDashboardOnDashboardList(dashboardName).should('be.visible').click()
    cy.jget(slider.editKanbanBoard).should('be.visible').click()

    //wait until Kanban Board Name and Kanban Board Location fields to be visible
    cy.jget(form.step4item.kanban_board_field).should('be.visible')
    cy.jget(form.step4item.kanban_board_placeholder).should('be.visible')

    cy.jget(form.step2aitem.existing_proj_location_field).should('be.visible')
    cy.jget(form.step2aitem.existing_proj_location_placeholder).should('be.visible')
    //edit Board Name
    if (newDashboardName)
        cy.jget(form.step4item.kanban_board_placeholder).should('be.visible').clear().type(newDashboardName)
    //update Board
    if (status)
        cy.jget(form.step8item.form_kanban_board_archive_placeholder)
            .scrollIntoView()
            .should('be.visible')
            .click()
            .then(() => {
                cy.jget('.react-select__menu')
                    .contains(status)
                    .click()
            })
    //edit filter
    if (filter)
        cy.jget(form.step7item.kanban_board_filter_placeholder).scrollIntoView().should('be.visible').clear().type(filter)
    //edit Project Location
    if (projectLocation)
        cy.jget(form.step2aitem.existing_proj_location_placeholder)
            .scrollIntoView()
            .should('be.visible')
            .click()
            .type(projectLocation + '{enter}')
    //edit Additional Data Source 
    if (additionalDataSource)
        cy.jget(form.step3item.additional_data_source_placeholder)
            .scrollIntoView()
            .should('be.visible')
            .click()
            .type(additionalDataSource + '{enter}')
    cy.jget(form.updateKanbanBoard).should('be.visible').click()
    cy.jget(form.set_up_form, { timeout: 85000 }).should('not.be.visible')
    cy.wait(2000)
}

export const createKanbanBoardExistingProject = (props, wait = 3000) => {
    const { newDashboardName, boardType, additionalDataSource } = props

    cy.log(additionalDataSource)

    cy.jget(slider.addKanbanBoard).should('be.visible').click().wait(wait);
    //wait until Kanban Board Name and Kanban Board Location fields to be visible
    cy.jget(form.step4item.kanban_board_field).should('be.visible')
    cy.jget(form.step4item.kanban_board_placeholder).should('be.visible')

    cy.jget(form.step2aitem.existing_proj_location_field).should('be.visible')
    cy.jget(form.step2aitem.existing_proj_location_placeholder).should('be.visible')

    cy.jget(form.step2aitem.existing_proj_location_placeholder).should('be.visible').type('LOC{enter}')
    cy.jget(form.step4item.kanban_board_placeholder).scrollIntoView().should('be.visible').type(newDashboardName)

    if (additionalDataSource)
        cy.jget(form.step3item.additional_data_source_placeholder)
            .scrollIntoView()
            .should('be.visible')
            .click()
            .type(additionalDataSource + '{enter}')

    if (boardType) {
        cy.jget(form.step7item.kanban_board_filter_placeholder).should('be.visible').scrollIntoView()
        cy.jget(form.step5item.kanban_board_type_placeholder).should('be.visible')
            .find('.react-select__dropdown-indicator').click().wait(1000)
            .then(() => selectDropdownValue(boardType))
    }

    cy.jget(form.createKanbanBoard).should('be.visible').click()
    cy.jget(form.set_up_form, { timeout: 85000 }).should('not.be.visible')
    cy.url().should('include', 'ac.did=')
    return cy.apiGetDashboardId(newDashboardName)
}

const selectDropdownValue = (option) => {
    cy.jget('.react-select__menu')
        .should('be.visible')
        .and('contain.text', option)
        .click()
}

export const createKanbanBoardNewProject = (props, wait = 3000) => {
    const { dashboardName, projectName, projectKey, projectType, projectLocation, boardType } = props;

    cy.jget(slider.addKanbanBoard).should('be.visible').click().wait(wait)
    cy.jget(form.step4item.kanban_board_placeholder).scrollIntoView().should('be.visible')

    cy.jget(form.step1item.create_new_project).scrollIntoView().should('be.visible').click()

    cy.jget(form.step2bitem.project_name_placeholder).should('be.visible').type(`${projectName}{enter}`)
    cy.jget(form.step2bitem.project_key_placeholder).should('be.visible').type(`${projectKey}{enter}`)

    cy.jget(form.step4item.kanban_board_placeholder).scrollIntoView().should('be.visible').type(dashboardName)
    cy.jget(form.step4item.kanban_board_type_successful_message).should('be.visible')

    if (projectType) {
        cy.jget(form.step2bitem.project_type_placeholder).scrollIntoView().should('be.visible').click()
        selectDropdownValue(projectType)
    }

    if (projectLocation)
        cy.jget(form.step2aitem.existing_proj_location_placeholder)
            .scrollIntoView()
            .should('be.visible')
            .click()
            .type(projectLocation + '{enter}')

    if (boardType) {
        cy.jget(form.step7item.kanban_board_filter_placeholder).should('be.visible').scrollIntoView()
        cy.jget(form.step5item.kanban_board_type_placeholder).should('be.visible')
            .find('.react-select__dropdown-indicator').click().wait(1000)
            .then(() => selectDropdownValue(boardType))
    }

    cy.jget(form.createKanbanBoard).should('be.visible').click()
    cy.jget(form.set_up_form, { timeout: 85000 }).should('not.be.visible')
    cy.url().should('include', 'ac.did=')

    return cy.apiGetDashboardId(dashboardName)
}

export const removeAdditionalProjectDataSource = () => {
    cy.jget(form.step3item.additional_data_source_placeholder)
        .scrollIntoView()
        .should('be.visible')
        .find('[aria-label="Clear"]')
        .click()
}