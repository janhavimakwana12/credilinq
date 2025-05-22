import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, py: 2, textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Credilinq Assignment
      </Typography>
    </Box>
  );
}
