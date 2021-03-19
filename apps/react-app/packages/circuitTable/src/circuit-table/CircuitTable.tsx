import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AutoComplete } from './Autocomplete';
import useCircuitData from './useCircuitData';

const useStyles = makeStyles(() =>
    createStyles({
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
                background: '#31334a',
                color: '#fff',
            },
        },
        circuitTable: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
        },
    }),
);

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

interface CircuitTableDataAutocomplete {
    id: string;
    name: string;
}

export const CircuitTable: React.FC<CircuitTableProps> = () => {
    const data = useCircuitData();
    const classes = useStyles();

    return (
        <div className={classes.circuitTable}>
            <AutoComplete
                curcuitName={data.data.map((item) => {
                    const obj: CircuitTableDataAutocomplete = {
                        id: item.id,
                        name: item.circuitName,
                    };
                    return obj;
                })}
            />
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
