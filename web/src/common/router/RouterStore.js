import { RouterStore as MobxRouterStore, createRouterState, browserHistory, HistoryAdapter } from 'mobx-state-router';
import { reaction } from 'mobx';
import { UNAUTHENTICATED_ROUTES } from '../constants';

const routes = [
    {
        name: 'login',
        pattern: '/login',
        beforeEnter: (fromState, toState, routerStore) => {
            const { options: { rootStore: { membershipModuleStore: { loginViewStore: { init } } } } } = routerStore;
            init();
        },
        onExit: (fromState, toState, routerStore) => {
            const { options: { rootStore: { membershipModuleStore: { loginViewStore: { dispose } } } } } = routerStore;
            dispose();
        },
    },
    {
        name: 'register',
        pattern: '/register',
        beforeEnter: (fromState, toState, routerStore) => {
            const { options: { rootStore: { membershipModuleStore: { registerViewStore: { init } } } } } = routerStore;
            init();
        },
        onExit: (fromState, toState, routerStore) => {
            const { options: { rootStore: { membershipModuleStore: { registerViewStore: { dispose } } } } } = routerStore;
            dispose();
        },
    },
    {
        name: 'dashboard',
        pattern: '/',
    },
    {
        name: 'userManagement',
        pattern: '/user-management',
    }
]

const notFoundState = createRouterState('notFoundState');

class RouterStore {
    constructor(rootStore) {
        this.router = new MobxRouterStore(routes, notFoundState, { rootStore });
        this.routerStateReaction = reaction(this.routerStateDataFn, this.routerStateEffectFn);
    }

    routerStateDataFn = () => this.router.routerState;

    routerStateEffectFn = async (value, previousValue, reaction) => {
        const loginViewStore = this.router.options.rootStore.membershipModuleStore.loginViewStore;
        const { isUserAuthenticated, getUserData } = loginViewStore;
        if (isUserAuthenticated && !loginViewStore.isUserInState) await getUserData();
        if (isUserAuthenticated && loginViewStore.isUserInState) {
            if (UNAUTHENTICATED_ROUTES.includes(value.routeName)) this.goTo('dashboard');
        } else {
            if (!UNAUTHENTICATED_ROUTES.includes(value.routeName)) this.goTo('login');
        }
    }

    setObservingRouterStateChanges = () => {
        const historyAdapter = new HistoryAdapter(this.router, browserHistory);
        historyAdapter.observeRouterStateChanges();
    }

    goTo = (routeName, options) => {
        this.router.goTo(routeName, options);
    }
}

export default RouterStore;
