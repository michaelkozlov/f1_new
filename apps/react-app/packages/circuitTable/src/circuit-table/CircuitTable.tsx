import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { AutoComplete } from './Autocomplete';
import './CircuitTable.css';
import useCircuitData from './useCircuitData';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        background: 'white',
        border: 'none',
        '& .MuiDataGrid-colCellTitle': {
            fontWeight: 700,
            color: '#fff',
        },
        '& .MuiDataGrid-colCellWrapper': {
            background: '#31334a',
        },
        '& .MuiDataGrid-footer, .MuiTablePagination-root': {
            background: palette.primary,
            color: '#fff',
        },
    },
    table: {
        display: 'flex',
        width: '100%',
        justify-content: 'space-around',
    },
    
}));

const columns: GridColDef[] = [
    {
        field: 'circuitName',
        headerName: 'Название трассы',
        type: 'string',
        flex: 1,
    },
    {
        field: 'locality',
        headerName: 'Место',
        type: 'string',
        flex: 1,
    },
    {
        field: 'country',
        headerName: 'Страна',
        type: 'string',
        flex: 1,
    },
];

export interface CircuitTableProps {
    showProgress?: boolean;
    pageSize?: number;
}

export const CircuitTable: React.FC<CircuitTableProps> = ({ showProgress: shoProgress, pageSize }) => {
    const data = useCircuitData();
    const classes = useStyles();

    if (data.loading) {
        return <CircularProgress />;
    }

    return (
        <div className="circuit-table">
            <AutoComplete curcuitName={data.data.map((name) => name.circuitName)} />
            <div style={{ width: '50%' }}>
                <DataGrid
                    className={classes.root}
                    rows={data.data}
                    columns={columns}
                    pageSize={10}
                    autoHeight
                    disableColumnMenu
                />
            </div>
        </div>
    );
};
