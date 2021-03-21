module.exports = {
    RESULT_DIR: './allure/allure-results',
    REPORT_DIR: './allure/allure-report',
    SCREENSHOT_DIR: './artifacts/screenshots',
  
    CLEAN_RESULT_DIR: true,
    CLEAN_REPORT_DIR: true,
    CLEAN_SCREENSHOT_DIR: true,
  
    ENABLE_SCREENSHOTS: true,
    ENABLE_QUARANTINE: false,
    ENABLE_LOGGING: false,
    CONCURRENCY: 1,
  
    LABEL: {
      ISSUE: 'JIRA Issue',
      FLAKY: 'Flaky test',
      SCREENSHOT_MANUAL: 'Screenshot taken manually',
      SCREENSHOT_ON_FAIL: 'Screenshot taken on fail',
      DEFAULT_STEP_NAME: 'Test step',
    },
  };