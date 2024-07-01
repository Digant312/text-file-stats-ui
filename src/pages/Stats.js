import { useState } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import StatsForm from "../components/StatsForm";
import TextStats from "../components/TextStats";

import appConfig from "../config/appConfig";

export default function Stats() {
  const [stats, setStats] = useState(null);

  const handleFormSubmit = (formData) => {
    const url = `${appConfig.BASE_URL}/files/stats`;
    axios
      .post(url, formData)
      .then((response) => {
        setStats(response?.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
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
  );
}
