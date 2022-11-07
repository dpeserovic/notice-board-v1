class LoginViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
    }

    goToRegister = () => {
        this.routerStore.goTo('register');
    }
}

export default LoginViewStore;
