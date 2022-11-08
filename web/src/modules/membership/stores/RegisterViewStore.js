import { createForm } from 'common/form';
import { registerFormFields } from '../forms';

class RegisterViewStore {
    registerForm = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
    }

    init = () => {
        this.registerForm = createForm({ fields: registerFormFields, hooks: { onSuccess: this.handleRegisterFormSuccess, onError: this.handleRegisterFormError } });
    }

    handleRegisterFormSuccess = form => {
        console.log(form);
    }

    handleRegisterFormError = form => {
        console.log(form);
    }

    goToLogin = () => {
        this.routerStore.goTo('login');
    }

    dispose = () => {
        this.registerForm = null;
    }
}

export default RegisterViewStore;