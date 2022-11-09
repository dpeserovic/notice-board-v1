import { BaasicApp } from 'common/baasic';
import { RouterStore } from '../router';
import { MembershipModuleStore } from 'modules/membership/stores';
import { NotificationStore } from 'common/stores';

class RootStore {
    constructor(apiKey) {
        this.baasicApp = new BaasicApp(apiKey);
        this.routerStore = new RouterStore(this);
        this.membershipModuleStore = new MembershipModuleStore(this);
        this.notificationStore = new NotificationStore();
    }
}

export default RootStore;
