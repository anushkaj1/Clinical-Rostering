import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Register from './RegisterUser';
import LeaveApprove from './LeaveApprove';

export default function Admin2() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        if (value === 0)
            setValue(1);
        else
            setValue(0);
    };

    function IconTabs() {
        return (
            <>
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered="true">
                    <Tab icon={<HowToRegIcon />} label="Add Users" />
                    <Tab icon={<CheckCircleIcon />} label="Approve Leaves" />
                </Tabs>
            </>
        )
    };
    
    if (value === 0) {
        return (
            <>
                <IconTabs />
                <Register />
            </>
        )
    }
    else if (value === 1) {
        return (
            <>
                <IconTabs />
                <LeaveApprove />
            </>
        )
    }
};
