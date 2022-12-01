import React from 'react';
import { observer } from 'mobx-react';
import { RBTableHeader, RBTableData } from './';

function RBTableRow({ rowType, data }) {
    let cellComponentList;
    switch (rowType) {
        case 'header':
            cellComponentList = data.map(d => <RBTableHeader key={d.key} title={d.title} />);
            break;
        case 'body':
            cellComponentList = Object.keys(data).map(d => <RBTableData key={`${d}-${data.id}`} value={data[d]} />);
            break;
        case 'footer':
            cellComponentList = Object.keys(data).map(d => <RBTableData key={d} value={data[d]} />);
    }
    return <tr>{cellComponentList.map(component => component)}</tr>;
}

export default observer(RBTableRow);
