

export const selectors = {
    table: '[data-testid="edit-card-layout-issue-type-list-id--table"]',
    editColor: '#edit-color',
    cancel: '[data-id="form-kanban-card-layout-setting-cancel-button"]',
    save: '[data-id="form-kanban-card-layout-setting-submit-button"]',
    layoutList: {
        color: (hexColor) => `[title="${hexColor}"]`,
        select: '#select-color',
        cancel: '#cancel-color-selection'
    }
}