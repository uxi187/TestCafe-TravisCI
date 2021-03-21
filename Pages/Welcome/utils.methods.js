import { selectors as welcome } from './selectors'

export const dashboardListFavoriteIcon = (dashboardName) => {
    return cy.jget(welcome.kanbanBoardsTableBody)
        .contains(dashboardName)
        .should('be.visible')
        //.parent()
        .parents('td')
        .siblings(welcome.dasboardListFavoriteIcon)
}

export const isDashboardFavoriteOnDashboardList = (dashboardName, isFavorite) => {
    if (isFavorite) {
        return cy.jget(welcome.kanbanBoardsTableBody)
            .contains(dashboardName)
            .should('be.visible')
            //.parent()
            .parents('td')
            .siblings(welcome.dasboardListFavoriteIcon)
            .find('span')
            .should('have.css', 'color', 'rgb(255, 139, 0)')
    }
    else {
        return cy.jget(welcome.kanbanBoardsTableBody)
            .contains(dashboardName)
            .should('be.visible')
            //.parent()
            .parents('td')
            .siblings(welcome.dasboardListFavoriteIcon)
            .find('span')
            .should('have.css', 'color', 'rgb(223, 225, 230)')
    }
}

export const selectDashboardOnDashboardList = (dashboardName) => {
    return cy.jget(welcome.kanbanBoardsTableBody)
        .contains(dashboardName)
        .scrollIntoView()
        .should('be.visible')
        .parents('td')
        .siblings(welcome.dashboardListSelect)
        .find(welcome.radioButton)
}

export const getDashboardStatus = (dashboardName) => {
    return cy.jget(welcome.kanbanBoardsTableBody)
        .contains(dashboardName)
        .scrollIntoView()
        .should('be.visible')
        .parents('td')
        .siblings(welcome.boardStatus)
}


export const getDashboardProjectType = (dashboardName) => {
    return cy.jget(welcome.kanbanBoardsTableBody)
        .contains(dashboardName)
        .scrollIntoView()
        .should('be.visible')
        .parents('td')
        .siblings(welcome.projectType)
}

export const filterByColumn = (column, searchCriteria) => {
    cy.jget(column)
        .should('be.visible')
        .type(`${searchCriteria}{enter}`)
}

export const verifySearchResult = (column, value) => {
    cy.jget(column)
        .should($elList => {
            const boardStatusArray = $elList.map((i, el) => Cypress.$(el).text()).get()
            boardStatusArray.forEach(val => expect(val).to.eql(value))
        })
}