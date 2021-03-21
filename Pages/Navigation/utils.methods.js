import { selectors as el } from './selectors'
import { selectors as nav } from '../Navigation/selectors'

export const openDashboards = () => {
    cy.get(el.apps).should('be.visible').click()
    cy.get(el.navigation_items).contains('EasyKAD Kanban Boards').should('be.visible').click()
}

export const openEasyKadNav = () => {
    cy.jget(el.delivery_boards_popup_nav, {timeout: 50000}).should('be.visible').click()
    //cy.jget(el.favorite_dashboards, {timeout: 50000}).should('be.visible')
    //cy.jget(el.recent_dashboards, {timeout: 50000}).scrollIntoView().should('be.visible')
    cy.jget('.atlaskit-portal-container [data-testid="EasyKAD™ Team Delivery Kanban Boards-popup"]').should('be.visible')
    cy.wait(2000)
}

export const hoverOnDashboardUnder = (dashboardPosition, dashboardName) => {
    return cy.jget(dashboardPosition).find('button').contains(dashboardName).scrollIntoView().parent('span')
}
export const hoverOnNavDashboard = (dashboardPosition, dashboardName) => {
    return cy.jget(dashboardPosition).find('button').contains(dashboardName).scrollIntoView()
}

export const dashboardIsVisibleUnder = (dashboardPosition, dashboardName) => {
    return cy.jget(dashboardPosition).scrollIntoView().contains(dashboardName)
}

export const navigateToAllBoards = () => {
    cy.jget(nav.popup_menu).find(nav.viewAllBoards).should('be.visible').click()
}