import { BaasicApp as App } from 'baasic-sdk-reactjs';

class BaasicApp {
    constructor(apiKey) {
        this.app = new App(apiKey);
        this.membershipModule = this.app.membershipModule;
    }
}

export default BaasicApp;
