import { makeObservable, observable, action, runInAction, computed } from 'mobx';
import { createForm } from 'common/form';
import { loginFormFields } from '../forms';
import { REGISTER_ROUTE_NAME, DASHBOARD_ROUTE_NAME, LOGIN_ROUTE_NAME } from '../constants';

class LoginViewStore {
    loginForm = null;
    user = null;

    get isUserAuthenticated() {
        return this.rootStore.baasicApp.app.getUser().isAuthenticated();
    }

    get isUserInState() {
        return this.user != null;
    }

    get userAccessToken() {
        return this.rootStore.baasicApp.app.getAccessToken();
    }

    constructor(rootStore) {
        makeObservable(this, {
            user: observable,
            handleLoginFormSuccess: action,
            getUserData: action,
            logout: action,
            isUserInState: computed,
        });
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
        this.login = this.rootStore.baasicApp.membershipModule.login;
    }

    init = () => {
        this.loginForm = createForm({ fields: loginFormFields, hooks: { onSuccess: this.handleLoginFormSuccess, onError: this.handleLoginFormError } });
    }

    handleLoginFormSuccess = async form => {
        try {
            const { username, password } = form.values();
            const response = await this.login.login({ username, password });
            if (response.statusCode === 200) {
                await this.getUserData();
                if (this.user != null) this.goToDashboard();
            }
        } catch (e) {
            this.rootStore.notificationStore.showErrorToast('Error');
        } finally {
        }
    }

    getUserData = async () => {
        const response = await this.login.loadUserData();
        runInAction(() => {
            if (response.statusCode === 200) {
                this.user = response.data;
            }
        });
    }

    handleLoginFormError = form => {
        this.rootStore.notificationStore.showErrorToast('Invalid form values');
    }

    logout = async () => {
        try {
            const { token, type } = this.userAccessToken;
            const response = await this.login.logout(token, type);
            if (response.statusCode === 204) {
                this.user = null;
                this.goToLogin();
            }
        } catch (e) {
        } finally {
        }
    }

    goToRegister = () => {
        this.routerStore.goTo(REGISTER_ROUTE_NAME);
    }

    goToDashboard = () => {
        this.routerStore.goTo(DASHBOARD_ROUTE_NAME)
    }

    goToLogin = () => {
        this.routerStore.goTo(LOGIN_ROUTE_NAME);
    }

    dispose = () => {
        this.loginForm = null;
    }
}

export default LoginViewStore;
