import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import useDriverData from './useDriverData';

const columns: GridColDef[] = [
    {
        field: 'position',
        headerName: 'Позиция',
        type: 'string',
        flex: 1,
    },
    {
        field: 'racer',
        headerName: 'Гонщик',
        type: 'string',
        flex: 1,
    },
    {
        field: 'constructor',
        headerName: 'Команда конструктор',
        type: 'string',
        flex: 1,
    },
    {
        field: 'points',
        headerName: 'Очки',
        type: 'string',
        flex: 1,
    },
    {
        field: 'wins',
        headerName: 'Количество побед',
        type: 'string',
        flex: 1,
    },
];

export const DriverTable: React.FC = () => {
    const data = useDriverData();

    return (
        <div style={{ width: '100%' }}>
            <DataGrid rows={data.dataDriver} columns={columns} pageSize={10} autoHeight disableColumnMenu />
        </div>
    );
};
