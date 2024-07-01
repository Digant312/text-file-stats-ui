import { useState, Fragment } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StatsForm from "../components/StatsForm";
import TextStats from "../components/TextStats";

import appConfig from "../config/appConfig";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = (formData) => {
    const url = `${appConfig.BASE_URL}/files/stats`;
    axios
      .post(url, formData)
      .then((response) => {
        setStats(response?.data?.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err?.response?.data);
      });
  };

  const handleClose = () => {
    setError(null);
  };

  const alertAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Fragment>
      <Container>
        <Box pt={4}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Select a text file to check statistics.
          </Typography>
          <Box>
            <StatsForm handleSubmit={handleFormSubmit} />
            {stats ? (
              <Box
                p={2}
                mt={2}
                style={{ border: "1px solid #ddd", borderRadius: 4 }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  File Statistics
                </Typography>
                <TextStats data={stats} />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={error}
        message={error?.message}
        autoHideDuration={3000}
        action={alertAction}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Fragment>
  );
}
