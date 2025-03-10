import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'commonName', headerName: 'Common Name', width: 200 },
  { field: 'certificateType', headerName: 'Certificate Type', width: 250 },
  { field: 'intimationDate', headerName: 'Intimation Date', width: 150 },
  { 
    field: 'daysToExpire', 
    headerName: 'No. of Days (From Expiry date)', 
    width: 180, 
    renderCell: (params) => {
      let bgColor = 'white';
      if (params.value < 0) bgColor = 'red';
      else if (params.value <= 60) bgColor = 'lightyellow';
      else bgColor = 'lightgreen';
      return (
        <div style={{ backgroundColor: bgColor, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {params.value}
        </div>
      );
    }
  },
  { field: 'certExpirationDate', headerName: 'Cert Expiration Date', width: 150 },
  { field: 'authority', headerName: 'Authority', width: 120 },
  { field: 'renewStatus', headerName: 'Renew Status', width: 180 },
  { field: 'notes', headerName: 'Notes', width: 250 },
];

const sslRows = [
    { id: 1, commonName: "*.jazz.com.pk", certificateType: "Standard Wildcard SSL Certificate", intimationDate: "18/Feb/2025", daysToExpire: 62, certExpirationDate: "19/Apr/2025", authority: "Godaddy", renewStatus: "", notes: "" },
    { id: 2, commonName: "*.jazzcash.com.pk", certificateType: "Standard Wildcard SSL Certificate", intimationDate: "14/Feb/2025", daysToExpire: 58, certExpirationDate: "15/Apr/2025", authority: "Godaddy", renewStatus: "", notes: "" },
    { id: 3, commonName: "apim.jazz.com.pk", certificateType: "Standard SSL Certificate", intimationDate: "10/Apr/2025", daysToExpire: 113, certExpirationDate: "9/Jun/2025", authority: "Godaddy", renewStatus: "", notes: "" },
  
  ];
export default function DataTable() {
  return (
    <Paper sx={{ height: 'fit-content', maxHeight: '80vh', boxShadow: 'rgba(151, 146, 146, 0.2) 0px 2px 8px 4px', marginTop: '3vh', width: '100%' }}>
      <DataGrid
        style={{ maxHeight: '80vh' }}
        rows={sslRows}
        columns={columns}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
