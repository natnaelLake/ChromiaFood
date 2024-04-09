import { Box, Paper } from "@mui/material";
import DataGridComponent from "./DataGridomponent";
const UserList = () => {
  return (
    <Box pt={7} sx={{ height: "96vh", overflow: "hidden" }}>
      <Paper
        style={{
          paddingTop: 30,
          margin: 1,
          overflowX: "scroll",
          height: "90vh",
        }}
      >
        <DataGridComponent />
      </Paper>
    </Box>
  );
};

export default UserList;
