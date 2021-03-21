import * as jwt from 'atlassian-jwt';
import moment from 'moment';

//returns Promise
export const getCustomerAuthToken = async function (clientKey, userId, sharedSecret, resourceUrl = '', method = 'GET', expInMinutes = 5) {
    const now = moment().utc();
    const req = jwt.fromMethodAndUrl(method, resourceUrl);

    const tokenData = {
        "iss": clientKey,
        "sub": userId,
        "iat": now.unix(),                    // The time the token is generated
        "exp": now.add(expInMinutes, 'minutes').unix(),  // Token expiry time (recommend 3 minutes after issuing)
        "qsh": jwt.createQueryStringHash(req) // [Query String Hash](https://developer.atlassian.com/cloud/jira/platform/understanding-jwt/#a-name-qsh-a-creating-a-query-string-hash)
    };

    //const customer = await query(clientKey);
    //const token = jwt.encode(tokenData, customer.val.sharedSecret);
    const token = jwt.encode(tokenData, sharedSecret);
    return token
}