import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box, Drawer, CssBaseline, List, Typography, Divider, ListItem, ListItemButton} from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    QueryStatsOutlined as QueryStatsOutlinedIcon, 
    AvTimerOutlined as AvTimerOutlinedIcon,
    PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
    Groups2Outlined as Groups2OutlinedIcon,
    PermMediaOutlined as PermMediaOutlinedIcon,
    EventNoteOutlined as EventNoteOutlinedIcon,
    DvrOutlined as DvrOutlinedIcon,
    ListOutlined as ListOutlinedIcon,
    WorkOutlineOutlined as WorkOutlineOutlinedIcon,
    CompareOutlined as CompareOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,    
} from "@mui/icons-material";
import "./dashboard.css";
import Appbar from './Appbar';
import TabsComp from './TabsComp';
const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DashboardComp() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "1px 2px 30px 3px #aaa"
          },
        }}
        variant="persistent"
        anchor="left"
        elevation={50}
        open={true}
      >
        <DrawerHeader>
            <Box
                sx={{
                    width: "100%",
                    height: {xs: 30, md: 40, xl: 50},
                    margin: "20px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                    width: "70%",
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="insightful-logo"
                    src="https://app.insightful.io/assets/logos/insightful-logo-dark.svg"
                />
            </Box>            
        </DrawerHeader>
        <Divider />
        <List>
          {['Productivity Trends', 'Real-Time Insights', 'Employees', 'Teams', 'Screenshots', 'Time and Attendance', 'Apps and Websites', 'Activities', 'Projects', 'Reports', 'Settings'].map((text, index) => (
            <ListItem className='Listitem-Btn' 
                key={text} 
                dense={true}
                disablePadding
            >
              <ListItemButton>
                <ListItemIcon className="listitem_icon">
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {text == "Productivity Trends" && <QueryStatsOutlinedIcon />}
                  {text == "Real-Time Insights" && <AvTimerOutlinedIcon />}
                  {text == "Employees" && <PeopleOutlineOutlinedIcon />}
                  {text == "Teams" && <Groups2OutlinedIcon />}
                  {text == "Screenshots" && <PermMediaOutlinedIcon />}
                  {text == "Time and Attendance" && <EventNoteOutlinedIcon />}
                  {text == "Apps and Websites" && <DvrOutlinedIcon />}
                  {text == "Activities" && <ListOutlinedIcon />}
                  {text == "Projects" && <WorkOutlineOutlinedIcon />}
                  {text == "Reports" && <CompareOutlinedIcon />}
                  {text == "Settings" && <SettingsOutlinedIcon />}
                </ListItemIcon>
                <ListItemText
                    sx={(theme) => ({
                        color: "theme.palette.grey[700]",
                    })} 
                    primary={text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={true}>
        <Appbar />  
        <TabsComp />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}
