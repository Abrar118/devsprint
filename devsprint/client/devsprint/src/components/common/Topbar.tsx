import React from 'react';
import { AppBar, Toolbar, TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';

interface TopbarProps {
  searchQuery: string; 
  setSearchQuery: (query: string) => void; 
}

const Topbar: React.FC<TopbarProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  console.log('searchQuery: ', searchQuery);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: 'unset',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search any course"
            variant="outlined"
            size="small"
            sx={{ width: '700px' }}
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <Search />
                </IconButton>
              ),
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
