class RegisterViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routerStore = this.rootStore.routerStore;
    }

    goToLogin = () => {
        this.routerStore.goTo('login');
    }
}

export default RegisterViewStore;