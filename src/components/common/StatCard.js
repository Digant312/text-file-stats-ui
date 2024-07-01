import { Typography, Card, CardContent, Chip, Stack } from "@mui/material";

import AbcIcon from "@mui/icons-material/Abc";

export default function StatCard(props) {
  const cardStyle = {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    fontSize: 10,
    width: "100%",
  };
  const iconWrapperStyle = {
    width: 45,
    height: 45,
    background: "rgba(0,0,0,0.2)",
    borderRadius: "50%",
    marginBottom: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const iconStyle = {};

  const renderValue = (value) => {
    if (value === null || value === undefined) {
      return "N/A";
    } else if (Array.isArray(value)) {
      const chips = value.map((val, index) => {
        return (
          <Chip
            key={index}
            label={`${val.word || val.letter} - (${val.count})`}
          />
        );
      });
      return (
        <Stack direction="column" spacing={1}>
          {chips}
        </Stack>
      );
    }
    return (
      <Typography sx={{ fontSize: 28 }} gutterBottom>
        {value}
      </Typography>
    );
  };

  return (
    <Card style={{ ...cardStyle, background: props.background }}>
      <CardContent style={{ textAlign: "center", paddingTop: 24 }}>
        {props.icon ? (
          <div style={iconWrapperStyle}>
            <props.icon style={iconStyle} />
          </div>
        ) : (
          <div style={iconWrapperStyle}>
            <AbcIcon style={iconStyle} />
          </div>
        )}
        {renderValue(props.value)}
        <Typography variant="h6">{props.title}</Typography>
      </CardContent>
    </Card>
  );
}
