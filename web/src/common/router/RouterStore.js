import { RouterStore as MobxRouterStore, createRouterState, browserHistory, HistoryAdapter } from 'mobx-state-router';

let isUserLoggedIn = async (fromState, toState, routerStore) => {
    const { options: { rootStore: { membershipModuleStore: { loginViewStore } } }, goTo } = routerStore;
    const { isUserAuthenticated, getUserData } = loginViewStore;
    if (isUserAuthenticated && !loginViewStore.isUserInState) await getUserData();
    return isUserAuthenticated && loginViewStore.isUserInState ? Promise.resolve() : Promise.reject(goTo.call(routerStore, 'login'));
}

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
        beforeEnter: isUserLoggedIn,
    },
    {
        name: 'userManagement',
        pattern: '/user-management',
        beforeEnter: isUserLoggedIn,
    }
]

const notFoundState = createRouterState('notFoundState');

class RouterStore {
    constructor(rootStore) {
        this.router = new MobxRouterStore(routes, notFoundState, { rootStore });
        isUserLoggedIn = isUserLoggedIn.bind(this.router);
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
