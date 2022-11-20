import { createForm } from 'common/form';
import { registerFormFields } from '../forms';
import { LOGIN_ROUTE_NAME, activationUrl } from '../constants';

class RegisterViewStore {
    registerForm = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.globalLoaderStore = this.rootStore.globalLoaderStore;
        this.register = this.rootStore.baasicApp.membershipModule.register;
        this.routerStore = this.rootStore.routerStore;
    }

    init = () => {
        this.registerForm = createForm({ fields: registerFormFields, hooks: { onSuccess: this.handleRegisterFormSuccess, onError: this.handleRegisterFormError } });
    }

    handleRegisterFormSuccess = async form => {
        try {
            this.globalLoaderStore.suspend();
            const { username, email, password, confirmPassword } = form.values();
            const response = await this.register.create({ username, email, password, confirmPassword, activationUrl });
            if (response.statusCode === 200) {
                this.rootStore.notificationStore.showSuccessToast('Success');
            }
        } catch (e) {
            this.rootStore.notificationStore.showSuccessToast('Error');
        } finally {
            this.globalLoaderStore.resume();
        }
    }

    handleRegisterFormError = form => {
        this.rootStore.notificationStore.showErrorToast('Invalid form values');
    }

    goToLogin = () => {
        this.routerStore.goTo(LOGIN_ROUTE_NAME);
    }

    dispose = () => {
        this.registerForm = null;
    }
}

export default RegisterViewStore;