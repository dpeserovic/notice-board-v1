import { makeObservable, observable, action, computed } from 'mobx';

class TableStore {
    columns = [];
    data = {};

    get items() {
        return this.data.item.map(i => {
            const temp = {};
            this.columns.map(c => temp[c.key] = i[c.key]);
            return temp;
        });
    }

    get page() {
        return `Page: ${this.data.page}`;
    }

    get recordsPerPage() {
        return `Records per page: ${this.data.recordsPerPage}`;
    }

    get totalRecords() {
        return `Total records: ${this.data.totalRecords}`;
    }

    constructor(columns) {
        makeObservable(this, {
            data: observable,
            setData: action,
            items: computed,
            page: computed,
            recordsPerPage: computed,
            totalRecords: computed,
        });
        this.columns = columns;
    }

    setData = (data) => {
        this.data = data;
    }
}

export default TableStore;
