import { RouterStore } from '../router';
import { MembershipModuleStore } from 'modules/membership/stores';

class RootStore {
    constructor() {
        this.routerStore = new RouterStore(this);
        this.membershipModuleStore = new MembershipModuleStore(this);
    }
}

export default RootStore;
