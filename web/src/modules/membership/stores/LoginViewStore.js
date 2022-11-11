import { createForm } from 'common/form';
import { loginFormFields } from '../forms';
import { REGISTER_ROUTE_NAME, DASHBOARD_ROUTE_NAME, LOGIN_ROUTE_NAME } from '../constants';

class LoginViewStore {
    loginForm = null;
    user = null;

    get isUserAuthenticated() {
        return this.rootStore.baasicApp.app.getUser().isAuthenticated();
    }

    get userAccessToken() {
        return this.rootStore.baasicApp.app.getAccessToken();
    }

    constructor(rootStore) {
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
                const userData = await this.login.loadUserData();
                if (userData.statusCode === 200) {
                    this.user = userData;
                    this.goToDashboard();
                }
            }
        } catch (e) {
            this.rootStore.notificationStore.showErrorToast('Error');
        } finally {
        }
    }

    handleLoginFormError = form => {
        this.rootStore.notificationStore.showErrorToast('Invalid form values');
    }

    logout = async () => {
        try {
            const { token, type } = this.userAccessToken;
            const response = await this.login.logout(token, type);
            if (response.statusCode === 204) {
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
