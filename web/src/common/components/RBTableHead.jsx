import React from 'react';
import { observer } from 'mobx-react';
import { RBTableRow } from './';

function RBTableHead({ columns }) {
    return (
        <thead>
            <RBTableRow rowType='header' data={columns} />
        </thead>
    );
}

export default observer(RBTableHead);
