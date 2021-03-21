import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DriverTable } from '../driverTable/DriverTable';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        '&. MuiBox-root': {},
        '& .MuiAppBar-root': {
            height: 'auto',
        },
        '& .MuiAppBar-colorPrimary': {
            backgroundColor: 'transparent',
        },
        '& .MuiDataGrid-window': {
            backgroundColor: 'white',
        },
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
}));

interface TabPanelProps {
    children: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const CurrentSeason: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Таблица пилотов" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <DriverTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
};
