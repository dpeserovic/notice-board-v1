import React from 'react';
import { defaultTemplate } from 'common/hoc';
import { RBTable } from 'common/components';

function UserManagementPage({ userManagementViewStore }) {
    const { userManagementTableStore } = userManagementViewStore;
    return (
        <>
        <RBTable tableStore={userManagementTableStore} />
        </>
    );
}

export default defaultTemplate(UserManagementPage);
