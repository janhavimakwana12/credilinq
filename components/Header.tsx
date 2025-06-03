'use client';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledHeader = styled(AppBar)(({}) => ({
  backgroundImage: "url('/image1.jpg')",
  boxShadow: "none"
}))

export default function Header() {
  return (
    <StyledHeader position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">SME HealthCheck - Get Started</Typography>
      </Toolbar>
    </StyledHeader>
  );
}
