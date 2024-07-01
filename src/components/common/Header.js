import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Text Statistics
            </Typography>
            <Avatar alt="Digant Patel">DP</Avatar>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
