import { TableStore } from 'common/stores';

const response = {
    "embed": null,
    "item": [
        {
            "creationDate": "2022-11-20T18:11:21.80632Z",
            "email": "creator1@email.com",
            "isApproved": false,
            "isLockedOut": false,
            "lastActivityDate": "2022-11-20T18:11:21.80632Z",
            "lastLockoutDate": "1754-01-01T00:00:00Z",
            "lastLoginDate": "1754-01-01T00:00:00Z",
            "name": "creator1",
            "roles": [],
            "userName": "creator1",
            "dateCreated": "0001-01-01T00:00:00",
            "dateUpdated": "0001-01-01T00:00:00",
            "id": "wMgUEtebXKQVg05cF8wqs2"
        },
        {
            "creationDate": "2022-11-20T18:11:47.245488Z",
            "email": "reporter1@email.com",
            "isApproved": false,
            "isLockedOut": false,
            "lastActivityDate": "2022-11-20T18:11:47.245488Z",
            "lastLockoutDate": "1754-01-01T00:00:00Z",
            "lastLoginDate": "1754-01-01T00:00:00Z",
            "name": "reporter1",
            "roles": [],
            "userName": "reporter1",
            "dateCreated": "0001-01-01T00:00:00",
            "dateUpdated": "0001-01-01T00:00:00",
            "id": "ycBPhDfpOo349EqPTs0aJ1"
        },
        {
            "creationDate": "2022-11-04T17:39:40.985726Z",
            "email": "d.peserovic@gmail.com",
            "isApproved": true,
            "isLockedOut": false,
            "lastActivityDate": "2022-11-04T17:39:41.00135Z",
            "lastLockoutDate": "1754-01-01T00:00:00Z",
            "lastLoginDate": "1754-01-01T00:00:00Z",
            "name": "d.peserovic",
            "roles": [],
            "userName": "d.peserovic",
            "dateCreated": "0001-01-01T00:00:00",
            "dateUpdated": "0001-01-01T00:00:00",
            "id": "0ve9NMky0oJ1kLUXWAhPe3"
        },
        {
            "creationDate": "2022-11-19T21:18:34.993039Z",
            "email": "aaaaa@aaaa.com",
            "isApproved": false,
            "isLockedOut": false,
            "lastActivityDate": "2022-11-19T21:18:34.993039Z",
            "lastLockoutDate": "1754-01-01T00:00:00Z",
            "lastLoginDate": "1754-01-01T00:00:00Z",
            "name": "aaaaa",
            "roles": [],
            "userName": "aaaaa",
            "dateCreated": "0001-01-01T00:00:00",
            "dateUpdated": "0001-01-01T00:00:00",
            "id": "btZ2yANyK91lUNMM6HNv4C"
        }
    ],
    "links": [],
    "page": 1,
    "recordsPerPage": 10,
    "searchQuery": null,
    "sort": null,
    "totalRecords": 4
}

class UserManagementViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userManagementTableStore = new TableStore([
            {
                key: 'id',
                title: 'ID',
                shouldHide: true,
            },
            {
                key: 'userName',
                title: 'Username',
            },
            {
                key: 'email',
                title: 'Email',
            },
            {
                key: 'isApproved',
                title: 'Approved',
            },
            {
                key: 'isLockedOut',
                title: 'Locked out',
            },
        ]);
        this.userManagementTableStore.setData(response);
    }
}

export default UserManagementViewStore;
