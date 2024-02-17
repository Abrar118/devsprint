import { AppBar, Toolbar, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import React from "react";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            placeholder="Search any course"
            variant="outlined"
            size="small"
            sx={{ width: '700px' }}
            InputProps={{
              endAdornment: (
                <IconButton size="small">
                  <Search />
                </IconButton>
              )
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
