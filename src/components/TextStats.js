import { Box, useMediaQuery } from "@mui/material";
import StatCard from "./common/StatCard";

import AbcIcon from "@mui/icons-material/Abc";
import TitleIcon from "@mui/icons-material/Title";
import EmojiSymbolsIcon from "@mui/icons-material/EmojiSymbols";
import Filter3Icon from "@mui/icons-material/Filter3";

export default function TextStats(props) {
  const narrowWidth = useMediaQuery("(max-width:767px)");

  const renderStats = () => {
    return statsConfig(props.data).map((stat, index) => (
      <StatCard
        key={index}
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
        background={stat.background}
      />
    ));
  };
  return (
    <Box
      component="section"
      sx={{
        marginTop: 4,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: narrowWidth ? "column" : "row",
        gap: 2,
      }}
    >
      {renderStats()}
    </Box>
  );
}

export const statsConfig = (stats) => {
  return [
    {
      key: "wordCount",
      title: "Total Words",
      value: stats?.wordCount,
      icon: AbcIcon,
      background: "#d2e9fc",
    },
    {
      key: "letterCount",
      title: "Total Letters",
      value: stats?.letterCount,
      icon: TitleIcon,
      background: "#d1f2fd",
    },
    {
      key: "symbolCount",
      title: "Total Symbols",
      value: stats?.symbolCount,
      icon: EmojiSymbolsIcon,
      background: "#fff7cd",
    },
    {
      key: "wordCount",
      title: "Top 3 Words",
      value: stats?.topThreeWords,
      icon: Filter3Icon,
      background: "#ffe7d9",
    },
    {
      key: "wordCount",
      title: "Top 3 Letters",
      value: stats?.topThreeLetters,
      icon: Filter3Icon,
      background: "#daf5d6",
    },
  ];
};
