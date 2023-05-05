import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Toolbar, InputBase, Chip, Button} from "@mui/material"
import {
    Search as SearchIcon,
    EventNoteOutlined as EventNoteOutlinedIcon,
    FileDownloadOutlined as FileDownloadOutlinedIcon,
    ReorderOutlined as ReorderOutlinedIcon
} from "@mui/icons-material"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eee",
  '&:hover': {
    backgroundColor: "#ddd",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: "#888",
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NestedAppbar() {

  return (
    <Box sx={{ flexGrow: 1 }} >
      {/* <AppBar position="static" sx={{backgroundColor: "white"}}> */}
        <Toolbar>
            <Chip 
                sx={{
                        backgroundColor: "rgba(105, 94, 238,0.3)",
                        color: "#695eee",
                        borderRadius: "5px",
                        "& .MuiChip-label": {
                            color: "black"
                        }
                }}
                icon={<EventNoteOutlinedIcon />} 
                color='primary' 
                label="Today" 
            />
            <Box sx={{ flexGrow: 1 }} />
            <Search>
                <SearchIconWrapper>
                <SearchIcon sx={{color:"#bbb"}} />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>            
            <Button
                sx={{
                    minWidth: "20px",
                    width: "50px",
                    height: "40px",
                    margin: "auto 10px",
                    color: "#695eee",
                    borderColor: "#695eee"
                }}
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="primary"
              variant="outlined"
            >
              <FileDownloadOutlinedIcon />
            </Button>
            <Button
                sx={{
                    minWidth: "20px",
                    width: "50px",
                    height: "40px",
                    color: "#695eee",
                    borderColor: "#695eee"
                }}
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="primary"
              variant="outlined"
            >                
                <ReorderOutlinedIcon />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          </Box>
        </Toolbar>
    </Box>
  );
}
