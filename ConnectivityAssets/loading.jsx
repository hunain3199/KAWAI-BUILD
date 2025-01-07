import { Backdrop, Box } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 100000,
        opacity: "0.5",
      }}
      open={isLoading}
    >
      <Box sx={{ position: "relative" }}>
        <ClipLoader color="#008080" size={70}></ClipLoader>
      </Box>
    </Backdrop>
  );
};

export default Loading;
