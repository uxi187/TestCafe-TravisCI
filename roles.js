import { Role, Selector } from 'testcafe';
import * as user from './__constants__/users'
import {setEnvironment} from './environments'
const env = setEnvironment();

export const userPedro = Role(`${env.JIRA_LOGIN_URL}`, async t => {
    const jiraUserName = Selector('input[id="username"]');
    const jiraPassword = Selector('input[id="password"]');
    const submit = Selector('button[id="login-submit"]');
    //const postLoginSelector =  Selector('a[href^="/browse/"]');
    const postLoginSelector =  Selector('[data-test-id="global-pages.directories.projects-directory-v2.create-projects-button.button.button"]');
    await t
        .maximizeWindow()
        .typeText(jiraUserName, user.PEDRO.username)
        .click(submit)
        .typeText(jiraPassword, user.PEDRO.password)
        .click(submit)
        .expect(postLoginSelector.visible).ok()
});

export const userKirsten = Role(`${env.JIRA_LOGIN_URL}`, async t => {
    const jiraUserName = Selector('input[id="username"]');
    const jiraPassword = Selector('input[id="password"]');
    const submit = Selector('button[id="login-submit"]');
    const postLoginSelector =  Selector('[data-test-id="global-pages.directories.projects-directory-v2.create-projects-button.button.button"]');
    await t
        .maximizeWindow()
        .typeText(jiraUserName, user.KIRSTEN.username)
        .click(submit)
        .typeText(jiraPassword, user.KIRSTEN.password)
        .click(submit)
        .expect(postLoginSelector.visible).ok()
});