import { USER_MANAGEMENT_ROUTE_NAME } from '../constants';

class DashboardViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
    }

    goToUserManagement = () => {
        this.routerStore.goTo(USER_MANAGEMENT_ROUTE_NAME);
    }
}

export default DashboardViewStore;
