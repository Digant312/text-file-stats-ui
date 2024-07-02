import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Container,
} from "@mui/material";

export default function Header() {
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
