import React from 'react';
import { observer } from 'mobx-react';

function RBTableHeader({ title }) {
    return <th>{title}</th>;
}

export default observer(RBTableHeader);
