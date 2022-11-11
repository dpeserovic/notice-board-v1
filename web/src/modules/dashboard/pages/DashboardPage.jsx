import React from 'react';
import { defaultTemplate } from 'common/hoc';

function DashboardPage(props) {
    const { membershipModuleStore: { loginViewStore: { logout } } } = props;
    return (
        <>
            <button onClick={logout}>LOG OUT</button>
        </>
    );
}

export default defaultTemplate(DashboardPage);
