export const selectors = {
    set_up_form: '[data-id="form-set-up"]', // header',
    createKanbanBoard: '[data-id="create-kanban-board"]',
    updateKanbanBoard: '[data-id="edit-kanban-board"]',
    cancel: '[data-id="clear-filter"]',
    boardStatusHistory: {
        tableBody: 'tbody[data-testid="kanban-board-status-history--body"]',
        firstRow: '[data-testid^="kanban-board-status-history--row-row-0"]',
        secondRow: '[data-testid^="kanban-board-status-history--row-row-1"]'

    },

    step1item: {
        header: 'h4[data-id="step1item-header"]',
        paragraph: 'p[data-id="step1item-paragraph"]',
        label: '#field-project-location-label',
        use_existing_project: 'input[name="project-location"][value="existing"]',
        create_new_project: 'input[name="project-location"][value="new"]'
    },

    step2aitem: {
        header: 'h4[data-id="step2aitem-header"]',
        paragraph: 'p[data-id="step2aitem-paragraph"]',
        existing_proj_location_field: '#field-project-location-name-label',
        existing_proj_location_placeholder: '#field-project-location-name',
        existing_proj_location_successful_message: '#field-project-location-name-valid',
        existing_proj_location_error_message: '#field-project-location-name-error'
    },

    step2bitem: {
        header: 'h4[data-id="step2bitem-header"]',
        paragraphs: '[data-id="step2bitem"] p',
        project_type_field: '#field-project-type-label',
        project_type_placeholder: '#field-project-type',
        project_name_field: '#field-project-name-label',
        project_name_placeholder: '#field-project-name',
        project_name_error: '#field-project-name-error',
        project_name_successful_message: '#field-project-name-valid',
        project_key_field: '#field-project-key-label',
        project_key_placeholder: '#field-project-key',
        project_key_error: '#field-project-key-error',
        project_lead_field: '#field-project-lead-label',
        project_lead_placeholder: '#field-project-lead',
        project_lead_successful_message: '#field-project-lead-valid'
    },

    step3item: {
        header: 'h4[data-id="step3item-header"]',
        paragraph: 'p[data-id="step3item-paragraph"]',
        additional_data_source: '#field-project-data-source-additional-label',
        //additional_data_source_placeholder:'#field-data-source-additional',
        additional_data_source_placeholder: '#field-project-data-source-additional'
    },

    step4item: {
        header: 'h4[data-id="step4item-header"]',
        paragraph: 'p[data-id="step4item-paragraph"]',
        kanban_board_field: '#field-kanban-board-name-label',
        kanban_board_placeholder: '#field-kanban-board-name',
        kanban_board_type_error_message: '#field-kanban-board-name-error',
        kanban_board_type_successful_message: '#field-kanban-board-name-valid'
    },

    step5item: {
        header: 'h4[data-id="step5item-header"]',
        paragraph: 'p[data-id="step5item-paragraph"]',
        kanban_board_type_field: '#field-kanban-board-type-label',
        edit_kanban_board_type_field: '#field-kanban-board-type-label',
        kanban_board_type_placeholder: '#field-kanban-board-type',
        edit_kanban_board_type_placeholder: '#field-kanban-board-type',
        kanban_board_type_successful_message: '#kanban-board-type-valid'
    },

    step6item: {
        header: 'h4[data-id="step6item-header"]',
        paragraph: 'p[data-id="step6item-paragraph"]',
        kanban_board_admin_field: '#field-kanban-board-admins-label',
        kanban_board_admin_placeholder: '#field-kanban-board-admins',
        kanban_board_type_successful_message: '#field-kanban-board-admins-valid',
        kanban_board_admin_error_message: '#field-kanban-board-admins-error'
    },

    step7item: {
        header: 'h4[data-id="step7item-header"]',
        paragraph: 'p[data-id="step7item-paragraph"]',
        kanban_board_filter_field: '#field-kanban-board-filter-label',
        kanban_board_filter_placeholder: '#field-kanban-board-filter',
        kanban_board_filter_successful_message: '#field-kanban-board-filter-valid',
        kanban_board_filter_error_message: '#field-kanban-board-filter-error'
    },

    step8item: {
        paragraph: 'p[data-id="step8item-paragraph"]',
        kanban_board_archive_status_field: '#field-kanban-board-archive-status-label',
        form_kanban_board_archive_placeholder: '#field-kanban-board-archive-status',
    },

    step9item: {
        kanban_board_status_field: '#field-kanban-board-status-history-label',
        kanban_board_status_table: '[data-testid="kanban-board-status-history--head"]',
    }
}