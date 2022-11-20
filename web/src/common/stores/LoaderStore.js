import { makeObservable, observable, computed, action, runInAction } from 'mobx';
import { DEFAULT_LOADER_STORE_DELAY } from '../constants';

class LoaderStore {
    loading = observable.box(false);
    suspendTimeout = null;

    get isLoading() {
        return this.loading.get();
    }

    constructor() {
        makeObservable(this, {
            suspend: action,
            resume: action,
            isLoading: computed,
        });
    }

    suspend = () => {
        this.suspendTimeout = setTimeout(() => runInAction(() => this.loading.set(true)), DEFAULT_LOADER_STORE_DELAY);
    }

    resume = () => {
        clearTimeout(this.suspendTimeout);
        this.suspendTimeout = null;
        this.loading.set(false);
    }

}

export default LoaderStore;
