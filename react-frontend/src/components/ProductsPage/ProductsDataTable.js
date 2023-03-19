
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.category}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.newField}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="price" header="price"  style={{ minWidth: "8rem" }} />
            <Column field="category" header="category" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="newField" header="newField" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;