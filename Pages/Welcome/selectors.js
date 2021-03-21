
export const selectors = {
    removeDashboard: 'button[to="/remove"]',
    hrefToDashboard: (dashboardId) => `a[href='/dashboards/${dashboardId}']`,
    kanbanBoardsTable: 'table[data-testid="all-kanban-boards-body--table"]',
    kanbanBoardsTableHeaders: '[data-testid="all-kanban-boards-headers--head"]',
    kanbanBoardsTableBody: '[data-testid="all-kanban-boards-body--body"]',
    radioButton: 'input[data-testid="cb-basic--radio-input"]',
    dasboardListFavoriteIcon: '[data-testid="all-kanban-boards-body--cell-0"]',
    favorite: '[data-testid="all-kanban-boards-body--cell-0"]',
    dashboardListSelect: '[data-testid="all-kanban-boards-body--cell-1"]',
    kanbanBoardName: '[data-testid="all-kanban-boards-body--cell-2"]',
    kanbanBoardAdmins: '[data-testid="all-kanban-boards-body--cell-3"]',
    kanbanBoardType: '[data-testid="all-kanban-boards-body--cell-4"]',
    kanbanProjectLocation: '[data-testid="all-kanban-boards-body--cell-5"]',
    projectType: '[data-testid="all-kanban-boards-body--cell-6"]',
    boardStatus: '[data-testid="all-kanban-boards-body--cell-7"]',
    filter:{
        boardName: '#search-name',
        boardAdmins: '#search-board-admins',
        boardBoardType: '#search-board-type',
        boardProjectLocation: '#search-board-location',
        boardProjectType: '#search-board-location-type',
        boardStatus: '#search-board-status',
        clearFilters: '#clear-filters'
    }
}