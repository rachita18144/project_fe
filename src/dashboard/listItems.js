import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom'; 
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Data Treatment" />
    </ListItem>
    <ListItem component={Link} to="/fill_survey_form" button>
      <ListItemIcon>
        < ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Survey Form" />
    </ListItem>
    <ListItem component={Link} to="/upload_audio_files" button>
      <ListItemIcon>
        <AudiotrackIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Audio Files" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Summary" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Non-Respondent" />
    </ListItem>
  </div>
);