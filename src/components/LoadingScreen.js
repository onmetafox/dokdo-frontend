import { Box } from '@mui/material';
import '../styles/style.css';
const LoadingScreen = () => {
  return (
    <Box width="100vw" height="100vh" display="flex" position="fixed" alignItems="center" justifyContent="center">
      <span class="loader"></span>
    </Box>
  );
};

export default LoadingScreen;
