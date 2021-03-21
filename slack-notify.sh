#! /usr/bin/env sh
SLACK_URL="https://hooks.slack.com/services/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"
SLACK_CHANNEL="#easykad4jira-notifications"
SLACK_REGRESSION_BOT_NAME="The Ghost of Regression"
SLACK_DEPLOY_BOT_NAME="The Ghost of Regression"
ARTIFACTS_URL="https://app.circleci.com/pipelines/github/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME/$CIRCLE_BUILD_NUM/workflows/$CIRCLE_WORKFLOW_ID/jobs/$CIRCLE_BUILD_NUM/artifacts"

function func_regression_pass() {
  curl -X POST \
    --data-urlencode "payload={\"channel\": \"$SLACK_CHANNEL\", \"username\": \"$SLACK_REGRESSION_BOT_NAME\", \"text\": \"All tests have been passed!!!\n\nView the pipeline here: $CIRCLE_BUILD_URL\", \"icon_emoji\": \":ghost:\"}" \
    "$SLACK_URL"
}

function func_regression_fail() {
  curl -X POST \
    --data-urlencode "payload={\"channel\": \"$SLACK_CHANNEL\", \"username\": \"$SLACK_REGRESSION_BOT_NAME\", \"text\": \"*BOO!*\nSome tests have been failed!\n\nView the pipeline here: $CIRCLE_BUILD_URL\nThere may be also be immediate clues as to why the process failed here: $ARTIFACTS_URL\n\n*Please list the findings of this failure in a :thread: below*\", \"icon_emoji\": \":ghost:\"}" \
    "$SLACK_URL"
}

function func_deploy_fail() {
  curl -X POST \
    --data-urlencode "payload={\"channel\": \"$SLACK_CHANNEL\", \"username\": \"$SLACK_DEPLOY_BOT_NAME\", \"text\": \"Looks like something got in the way of shipping it\n\nView the pipeline here: $CIRCLE_BUILD_URL\n\n*Please list the findings of this failure in a :thread: below*\", \"icon_emoji\": \":mount_fuji:\"}" \
    "$SLACK_URL"
}

if [ "$1" = "REGRESSION_PASS" ]; then
  func_regression_pass
fi

if [ "$1" = "REGRESSION_FAIL" ]; then
  func_regression_fail
fi

if [ "$1" = "DEPLOY_FAIL" ]; then
  func_deploy_fail
fi

if [ -z "$1" ]; then
  echo "You'll need to specify a PASS or FAIL argument"
  exit 1
fi