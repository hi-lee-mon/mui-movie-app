import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LocalMovies } from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";

import { MovieFilter, TrendingUp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.common.drawer,
  },
  link: {
    color: "red",
  },
  icon: {
    color: "red",
  },
}));

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
    >
      <List className={classes.link}>
        <ListItem>
          <ListItemIcon>
            <LocalMovies className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TrendingUp className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MovieFilter className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
      </List>
    </Drawer>
  );
};
