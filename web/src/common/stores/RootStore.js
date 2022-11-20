import { BaasicApp } from 'common/baasic';
import { RouterStore } from '../router';
import { MembershipModuleStore } from 'modules/membership/stores';
import { LoaderStore, NotificationStore } from 'common/stores';

class RootStore {
    constructor(apiKey) {
        this.baasicApp = new BaasicApp(apiKey);
        this.routerStore = new RouterStore(this);
        this.globalLoaderStore = new LoaderStore();
        this.notificationStore = new NotificationStore();
        this.membershipModuleStore = new MembershipModuleStore(this);
    }
}

export default RootStore;
