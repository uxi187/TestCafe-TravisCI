/// <reference types="cypress" />
import { selectors as el } from '../../../cypress/Pages/Dashboard/selectors';
import { selectors as slider } from '../../../cypress/Pages/Slider/selectors';

import * as panel from '../Slider/utils.methods'
import { LEVEL1 } from '../../__helpers__/model/column.names';

export const createSubColumns = (...columns) => {
    cy.contains(slider.goToEditModeBtn).focus().should('be.visible').click()
    cy.get(el.element(columns.PLANNING)).toggleButtonAddNewSubColumn(LEVEL1.COLUMN_A).should('be.visible').click()
    cy.get(el.element(columns.READY_TO_DO)).toggleButtonAddNewSubColumn(LEVEL1.COLUMN_B).should('be.visible').click()
    cy.get(el.element(columns.WORK_IN_PROGRESS)).toggleButtonAddNewSubColumn(LEVEL1.COLUMN_C).should('be.visible').click()
    cy.get(el.element(columns.DONE)).toggleButtonAddNewSubColumn(LEVEL1.COLUMN_D).should('be.visible').click()
    cy.get(el.element(columns.ARCHIVE)).toggleButtonAddNewSubColumn(LEVEL1.COLUMN_E).should('be.visible').click()
    cy.contains(slider.goToViewModeBtn).focus().should('be.visible').click()
}
export const setInternalColumn = (columnId, internalColumnNumber) => {
    cy.jget(el.settings(columnId))
        .find(el.column.internalColumnDropdown)
        .should('be.visible')
        .click()
    cy.jget(el.column.internalColumnOptions)
        .contains(internalColumnNumber)
        .should('be.visible')
        .click()
}

export const editAndSetInternalColumn = (columnId, internalColumnNumber) => {
    panel.goToEditDashboardMode()
    cy.expandColumnSettingsByColumnId(columnId)
    cy.jget(el.settings(columnId))
        .find(el.column.internalColumnDropdown)
        .should('be.visible')
        .click()
    cy.jget(el.column.internalColumnOptions)
        .contains(internalColumnNumber)
        .should('be.visible')
        .click()
    panel.saveAndGoToViewDashboardMode();
}