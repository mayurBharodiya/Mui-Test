import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Badge, Button, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import "./dashboard.css"

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{backgroundColor: "white"}}
        elevation={0}
        >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: "#333", fontweight: "700" }}
          >
            Employees
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button 
                sx={{
                    backgroundColor: "#695eee",
                    marginRight: "20px",
                    "&:hover": {
                        backgroundColor: "#695eee",                        
                    }
                }} 
                variant='contained'
             >
                Add New Employees
            </Button>
            <Badge
                sx={{
                    "& .MuiBadge-dot": {
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",

                    }
                }} 
                color="error" 
                badgeContent=" " 
                variant="dot" 
                overlap="circular" 
            >
                <Avatar 
                    sx={(theme) => ({
                        backgroundColor: theme.palette.grey[50],
                        border: `1px solid #695eee`,
                        color: "#695eee",                
                    })}
                >
                    <NotificationsNoneIcon />
                </Avatar>
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
