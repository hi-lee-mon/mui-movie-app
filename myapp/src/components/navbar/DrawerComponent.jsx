import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LiveTv, LocalMovies } from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import { useHistory } from "react-router";

import { MovieFilter, TrendingUp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: "#14213d",
  },
  link: {
    color: "red",
    cursor: "pointer",
  },
  icon: {
    color: "red",
    cursor: "pointer",
  },
}));

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  // history
  const history = useHistory();

  const navigation = (link) => {
    history.push(`/${link}`);
  };

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
            <LiveTv className={classes.icon} />
          </ListItemIcon>
          <ListItemText onClick={() => navigation("")} primary="Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TrendingUp className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            onClick={() => navigation("trending")}
            primary="Trending"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalMovies className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            onClick={() => navigation("TVSeries")}
            primary="TV series"
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
