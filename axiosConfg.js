// First we need to import axios.js
import { setEnvironment } from './environments'
import { getCustomerAuthToken } from './requests/_helpers_'
import axios from "axios";
const env = setEnvironment();


export async function apiGetJiraJWTToken() {
    try {
        return await getCustomerAuthToken(env.JIRA_CLIENT_ID, env.JIRA_PROJECT_ID, env.JIRA_SHARED_SECRET)
    } catch (error) {
        console.error(error);
    }
}

const configuration = {
    baseURL: env.JIRA_API,
};

const axiosJira = axios.create({
    baseURL: env.BASE_URL
});

const axiosApp = axios.create(configuration);
const jwt = apiGetJiraJWTToken().then(r => {
    return r
});

axiosApp.interceptors.request.use(
    config => {
        apiGetJiraJWTToken().then(r =>{
            config.headers["Authorization"] = "JWT " + r;
        })

        return config
    },
    request => { console.log(request.config); },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axiosApp.interceptors.response.use(response => {
    // Edit response config
    console.log(response);
    return response;
}, error => {
    console.log(error);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    return Promise.reject(error);
});

export { axiosJira, axiosApp };
