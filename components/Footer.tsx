'use client';
import { Box, BoxProps } from '@mui/material';
import styled from '@emotion/styled';

const StyledFooter = styled(Box)<BoxProps>(({}) => ({
  backgroundImage: "url('/image1.jpg')",
  boxShadow: "none"
}));

export default function Footer() {
  return (
    <StyledFooter component="footer" sx={{ mt: 8, py: 2 }}>
    </StyledFooter>
  );
};
