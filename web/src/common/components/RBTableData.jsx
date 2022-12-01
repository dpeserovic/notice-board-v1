import React from 'react';
import { observer } from 'mobx-react';

function RBTableData({ value }) {
    return <td>{typeof value === 'boolean' ? value.toString() : value}</td>
}

export default observer(RBTableData);
