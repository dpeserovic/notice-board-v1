import React from 'react';
import { observer } from 'mobx-react';
import { RBTableRow } from './';

function RBTableBody({ items }) {
    return (
        <tbody>
            {items.map(i => <RBTableRow rowType='body' key={i.id} data={i} />)}
        </tbody>
    );
}

export default observer(RBTableBody);
