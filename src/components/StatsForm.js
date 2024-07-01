import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputFileUpload from "./common/InputFileUpload";

export default function StatsForm(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["text/plain"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid text file.");
    }
  };

  const handleSubmit = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      props.handleSubmit(formData);
    } else {
      setError("Please select a text file.");
    }
  };

  return (
    <div>
      <Box style={{ display: "flex", alignItems: "center", paddingBottom: 20 }}>
        <InputFileUpload
          style={{ marginRight: 20 }}
          startIcon={<FileOpenIcon />}
          variant="outlined"
          label="Select file"
          onChange={handleChange}
        />
        <Typography>{file?.name}</Typography>
      </Box>
      <Box>
        <Typography mb={2} style={{ color: "red" }}>
          {error}
        </Typography>
      </Box>
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        disabled={!file || error}
        onClick={handleSubmit}
      >
        Upload file
      </Button>
    </div>
  );
}
