import React from 'react';
import { observer } from 'mobx-react';
import Table from 'react-bootstrap/Table';
import { RBTableHead, RBTableBody, RBTableFooter } from './';

function RBTable({ tableStore }) {
    const { columns, items, page, recordsPerPage, totalRecords } = tableStore;
    return (
        <Table responsive>
            <RBTableHead columns={columns} />
            <RBTableBody items={items} />
            <RBTableFooter page={page} recordsPerPage={recordsPerPage} totalRecords={totalRecords} />
        </Table>
    );
}

export default observer(RBTable);
