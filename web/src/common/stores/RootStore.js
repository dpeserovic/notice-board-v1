import { BaasicApp } from 'common/baasic';
import { RouterStore } from '../router';
import { MembershipModuleStore } from 'modules/membership/stores';

class RootStore {
    constructor(apiKey) {
        this.baasicApp = new BaasicApp(apiKey);
        this.routerStore = new RouterStore(this);
        this.membershipModuleStore = new MembershipModuleStore(this);
    }
}

export default RootStore;
