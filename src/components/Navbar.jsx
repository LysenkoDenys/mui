import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <EmojiNatureIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>search</Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
