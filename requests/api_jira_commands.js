//const axios = require('axios').default;
import { axiosJira } from '../axiosConfg'
import { setEnvironment } from '../environments'
const env = setEnvironment();


export async function apiCreateJiraProject(jiraProjectKey, jiraProjectName) {
    return await axiosJira({
        method: 'POST',
        url: '/rest/simplified/latest/project',
        data: {
            key: jiraProjectKey,
            name: jiraProjectName,
            templateKey: "com.pyxis.greenhopper.jira:gh-simplified-scrum-classic"
        },
        auth: {
            username: env.JIRA_USERNAME,
            password: env.JIRA_USER_TOKEN
        },
    }).then(resp => {
        return resp.data
    })
}

export async function apiDeleteJiraProject(projectKey) {
    return await axiosJira({
        method: 'DELETE',
        url: `/rest/api/3/project/${projectKey}`,
        auth: {
            username: env.JIRA_USERNAME,
            password: env.JIRA_USER_TOKEN
        },
    })
}