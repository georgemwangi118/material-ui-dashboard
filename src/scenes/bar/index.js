import { Box } from "@mui/system";
import { BarChart, Header } from "../../components";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
