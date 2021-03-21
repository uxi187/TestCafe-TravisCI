import { t } from 'testcafe';
import ObjectID from 'bson-objectid'
import {axiosApp} from '../axiosConfg'

import { setEnvironment } from '../environments'
const env = setEnvironment();



/**
* Create a Dashboard request.
* @param  {string} dashboardName - Dashboard name
* @param  {string} userId - User unique Id
* @param  {string} templateId - Template Id for column configuration
* @param  {string} columns - Column configuration
* @param  {string} rows - Rows configuration
* @param  {object} project - Jira Project information
* @param  {string} jwt - Jira JWT token
*/
export async function apiCreateDashboard(props) {
    const {
        dashboardName,
        userId,
        templateId,
        columns,
        rows,
        project,
    } = props;
    const resp = await axiosApp({
        method: 'POST',
        url: `/api/v1/dashboards`,
        data: {
            title: dashboardName,
            createdBy: userId,
            modifiedBy: userId,
            projectId: {
                label: project.label || (`${project.projectName} (${project.projectKey})`),
                style: "classic",
                type: "software",
                value: project.value || project.projectId
            },
            id: ObjectID().toString(),
            type: templateId,
            templateId,
            boardAdmins: [userId],
            template: {
                columns,
                rows
            }
        }
    })
    return resp;
}

/**
* Create a Dashboard request.
* @param  {string} templateId - Template Id for column configuration
* @param  {string} jwt - Jira JWT token
*/
export async function apiGetBoardTemplate(props) {
    const {
        templateId
    } = props;

    const resp = await axiosApp({
        method: 'GET',
        url: `/api/v1/boardTemplate/${templateId}`
    })
    return resp;
}

/**
* Create a Dashboard and return Dashboard columns.
* @param  {string} dashboardName - Dashboard name
* @param  {string} templateId - Template Id for column configuration
* @param  {string} columns - Column configuration
* @param  {string} rows - Rows configuration
* @param  {object} project - Jira Project information
* @param  {string} jwt - Jira JWT token
*/
export async function apiCreateDashboardAndGetColumns(props) {
    const {
        dashboardName,
        templateId = "t1",
        userId = env.JIRA_USER_ID,
        project = {
            label: "LocalProject (LOC)",
            style: "classic",
            type: "software",
            value: env.JIRA_PROJECT_ID
        }
    } = props;
    //get columns based on templateId 
    const template = await apiGetBoardTemplate({ templateId }).then(resp => {
        return resp.data.template
    });
    //create dashboard and get dashboardId
    const dashboard = await apiCreateDashboard({
        dashboardName,
        templateId,
        columns: template.columns,
        rows: template.rows,
        userId,
        project
    }).then(resp => {
        return { dashboardId: resp.data.resourceId }

    });
    //parse data and return columns and lanes
    const all_columns = await apiGetDashboardData({
        dashboardId: dashboard.dashboardId
    })
    return { ...dashboard, ...all_columns };
}

export async function apiGetDashboardData(props) {
    const {
        dashboardId
    } = props;

    return await axiosApp({
        method: 'GET',
        url: `/api/v1/dashboards/${dashboardId}`,
    }).then(resp => {
        return getAllColumns({
            columns: resp.data[0].columns,
            lanes: resp.data[0].rows.map(x => x.lanes)[0]
        })
    })
}

export function getAllColumns(props) {
    const { columns, lanes } = props;
    let columnInitialValue1, columnInitialValue2, columnInitialValue3 = {};
    const laneInitialValue = {};

    var allColumnsLevel1 = columns.filter(a => a.level === 1).reduce((obj, item) => {
        return {
            ...obj,
            [item['title'].replace(/ |-/g, "_").toUpperCase()]: item,
        };
    }, columnInitialValue1);

    var allColumnsLevel2 = columns.filter(a => a.level === 2).reduce((obj, item) => {
        return {
            ...obj,
            [item['title'].replace(/ |-/g, "_").toUpperCase()]: item,
        };
    }, columnInitialValue2);

    var allColumnsLevel3 = columns.filter(a => a.level === 3).reduce((obj, item) => {
        return {
            ...obj,
            [item['title'].replace(/ |-/g, "_").toUpperCase()]: item,
        };
    }, columnInitialValue3);

    var allLanes = lanes.reduce((obj, item) => {
        return {
            ...obj,
            [item['title'].replace(/ |-/g, "_").toUpperCase()]: item,
        };
    }, laneInitialValue);

    return {
        allColumns: {
            statecolumns: allColumnsLevel1,
            columns: allColumnsLevel2,
            subcolumns: allColumnsLevel3,
            lanes: allLanes
        }
    }
}

/**
* Move issue using API.
* @param  {string} projectKey - Jira project key
*/
export async function apiMoveIssue() {
    return await axiosApp({
        method: 'PUT',
        url: `/api/v1/cards`,
        data: {
            "data": {
                "cards": [
                    {
                        "id": "602846363945d5719c066102",
                        "issueId": "10005",
                        "issueKey": "LOC-1",
                        "projectId": "10003",
                        "containerId": "60230792b88daa74aededfeb",
                        "isVisible": true,
                        "title": "SUMMARY 4071",
                        "description": "SUMMARY 8486 description",
                        "createdAt": 1601541373663,
                        "issueTypeId": "10004",
                        "updatedAt": 1613433832265,
                        "createdBy": "5e83b8810716a60c1ba30dfe",
                        "modifiedBy": "5e78016259b34d0c3c15e087",
                        "whattie": null,
                        "howie": null
                    }
                ]
            },
        },
        params: {
            'dashboardId': "6023079294b6ae05cec783d8"
        }
    })
        .then(resp => console.log(resp.status))
        .catch(errors => console.log(errors.response))
}

/**
* Broadcast Websocket action.
* @param  {string} action - Websocket action
* @param  {string} dashboardId - Dashboard
*/
export async function apiBroadcastActionWebsocket(action, dashboardId = '') {
    const resp = await axiosApp({
        method: 'POST',
        url: `/api/v1/socket/broadcastAction`,
        data: {
            action: {
                type: action,
                dashboardId: '6023079294b6ae05cec783d8'
            },
            clientId: `${env.JIRA_CLIENT_ID}`
        }
    })
        .catch(error => console.log(error.response))
    //validate response is OK
    await t.expect(resp.status).eql(200)
}
