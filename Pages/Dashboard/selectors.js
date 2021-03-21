
export const selectors = {
    h1: 'h1',
    columnContainer: '.columns-container',
    header: (colID) => `div[id='${colID}-header'].column-header`,
    body: (colID) => `div[id='${colID}-body'].body-template`,
    bodyTemplate: (colID) => `div[id='${colID}'].body-template`,
    element: (colID) => `div[id='${colID}'].column`,
    settings: (colID) => `div[id='${colID}-settings'].column-settings`,
    container: (laneId, colId) => `[data-lane-testid='${laneId}'][data-column-testid='${colId}'].card-container`,
    subcolumn: (colId) => `[data-column-testid='${colId}'].sub-column`,
    stateColumn: (colId) => `[data-state-testid='${colId}']`,
    rootColumn: (rootId) => `[data-root-testid='${rootId}']`,
    actionBtnGroup: '.action-buttons-group',
    actionBtn: '.action-button',
    toggleBtn: {
        addColumn: '#add-new-column',
        addSubColumn: '#add-new-sub-column',
        removeColumn: '#remove-column'
    },
    tooltip: '.atlaskit-portal .Tooltip',
    boardType: '[data-testid="board-type"]',
    boardName: '[data-testid="board-name"] h1',
    archivedDashboardWarning: '[data-testid="archived-dashboard-warning"] p',
    dashboardError: '[data-testid="dashboard-error"]',
    column: {
        title:'[data-testid="column-title"]',
        name:'input[name="column-name"]',
        addLeft:'[data-testid="create-column-left"]',
        addRight:'[data-testid="create-column-right"]',
        addBellow:'[data-testid="create-column-bottom"]',
        archive: '[data-testid="archive-column"]',
        color: '[data-testid="column-color"]',
        move: '[data-testid="move-column"]',
        moveLeft: '[data-testid="move-on-left"]',
        moveRight: '[data-testid="move-on-right"]',
        moveBellow: '[data-testid="move-on-bottom"]',
        internalColumn: '.card-per-row__control',
        internalColumnDropdown: '.card-per-row__indicator',
        internalColumnOptions: '.card-per-row__option',
        merge: '[data-testid="merge-column"]'
    }
}
