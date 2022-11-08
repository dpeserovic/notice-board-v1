import { createForm } from 'common/form';
import { loginFormFields } from '../forms';
import { REGISTER_ROUTE_NAME } from '../constants';

class LoginViewStore {
    loginForm = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
    }

    init = () => {
        this.loginForm = createForm({ fields: loginFormFields, hooks: { onSuccess: this.handleLoginFormSuccess, onError: this.handleLoginFormError } });
    }

    handleLoginFormSuccess = form => {
        console.log(form);
    }

    handleLoginFormError = form => {
        console.log(form);
    }

    goToRegister = () => {
        this.routerStore.goTo(REGISTER_ROUTE_NAME);
    }

    dispose = () => {
        this.loginForm = null;
    }
}

export default LoginViewStore;
