import { BaasicApp } from 'common/baasic';
import { RouterStore } from '../router';
import { LoaderStore, NotificationStore } from 'common/stores';
import { MembershipModuleStore } from 'modules/membership/stores';
import { DashboardViewStore } from 'modules/dashboard/stores';
import { UserManagementViewStore } from 'modules/user-management/stores';

class RootStore {
    constructor(apiKey) {
        this.baasicApp = new BaasicApp(apiKey);
        this.routerStore = new RouterStore(this);
        this.globalLoaderStore = new LoaderStore();
        this.notificationStore = new NotificationStore();
        this.membershipModuleStore = new MembershipModuleStore(this);
        this.dashboardViewStore = new DashboardViewStore(this);
        this.userManagementViewStore = new UserManagementViewStore(this);
    }
}

export default RootStore;
