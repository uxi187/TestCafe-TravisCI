import { t } from 'testcafe';
import { Selector, ClientFunction } from 'testcafe';
var chance = require('chance').Chance();

export async function enterName(name) {
    await t.typeText('#developer-name', name);
};

const jiraUserName = Selector('input[id="username"]');
const jiraPassword = Selector('input[id="password"]');
const submit = Selector('button[id="login-submit"]');
const postLoginSelector = Selector('a[href^="/browse/"]');

export async function login(user) {
    await t
        .typeText(jiraUserName, user.username)
        .click(submit)
        .typeText(jiraPassword, user.password)
        .click(submit)
        .expect(postLoginSelector.visible).ok()
}

export function generateJiraProjectName() {
    return chance
        .company()
        .replace(/'/, '')
}

export function generateJiraProjectKey() {
    return chance
        .company()
        .substr(0, 5)
        .toLocaleUpperCase()
        .trim()
        .replace(/'|,|-| /, '')
        +
        chance.natural({ min: 1, max: 9999 })
}