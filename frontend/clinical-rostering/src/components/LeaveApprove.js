import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'EID', width: 70, headerAlign: 'center', align: 'center'},
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 160,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 160,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 120,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'timeSlot',
    headerName: 'Time Slot',
    width: 140,
    headerAlign: 'center',
    align: 'center'
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', designation: 'Surgeon', location: 'Emergency', date: '19-03-2023', timeSlot: '10AM-4PM' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', designation: 'Neurologist', location: 'OPD', date: '20-03-2023', timeSlot: '10AM-4PM' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', designation: 'Cardiologist', location: 'ICU', date: '19-03-2023', timeSlot: '3PM-4PM' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', designation: 'Nurse', location: 'Emergency', date: '21-03-2023', timeSlot: '10AM-12PM'  },
];

export default function LeaveApprove() {
  return (
    <div style={{ height: 600, width: '70%', position: "absolute", left: "15%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
      />
    </div>
  );
}
