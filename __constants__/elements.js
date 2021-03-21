import { Selector } from 'testcafe';

export const iframe = {
    locator: 'iframe[id^="easykad__"]',
    body: '0.contentDocument.body',
    window: '0.contentWindow'
};

export const iframe1 = {
     easyKadIframe: Selector('iframe[id^="easykad__"]',  { timeout: 20000 })
};

