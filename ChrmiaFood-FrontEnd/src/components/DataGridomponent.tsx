import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 110 },
  { field: "email", headerName: "Email", width: 200 },
];

const rows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
    email: "bob.johnson@example.com",
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
    email: "bob.johnson@example.com",
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
    email: "bob.johnson@example.com",
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
    email: "bob.johnson@example.com",
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 42,
    email: "bob.johnson@example.com",
  },
];

const DataGridComponent = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        // autoHeight
        pagination
        paginationModel={{
          page: 0,
          pageSize: 10,
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default DataGridComponent;
