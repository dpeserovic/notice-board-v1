import React from 'react';
import { observer } from 'mobx-react';
import { RBTableRow } from './';

function RBTableFooter(props) {
    const footerData = { ...props };
    return (
        <tfoot>
            <RBTableRow rowType='footer' data={footerData} />
        </tfoot>
    );
}

export default observer(RBTableFooter);
