import { AppBar, Box, IconButton, Toolbar, Tabs, Tab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import makeStyles from "@mui/styles/makeStyles";
import { LiveTv, LocalMovies, TrendingUp } from "@mui/icons-material";
import { useHistory } from "react-router";
import { DrawerComponent } from "./DrawerComponent";
import { useEffect, useState } from "react";

// makeStylesでコンポーネントで利用するstyleを作成する。
// makeStylesで作成したuseStyles関数はオブジェクトを返す。
// そのオブジェクトをclasses変数に格納してスタイルを当てていく。
const useStyles = makeStyles((theme) => ({
  root: {},
  openDrawer: {
    marginLeft: "auto",
    cursor: "pointer",
  },
}));

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    if (value === 1) history.push("/TvSeries");
    if (value === 2) history.push("/Trending");
  }, [value]);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LiveTv />
          </IconButton>

          <Tabs
            textColor="inherit"
            value={value}
            // 第二引数でtabの番号を取得
            onChange={(e, i) => setValue(i)}
          >
            <Tab icon={<LiveTv />} label="MOVIES" />
            <Tab icon={<TrendingUp />} label="TRENDING" />
            <Tab icon={<LocalMovies />} label="TV SERIES" />
          </Tabs>
          <MenuIcon
            onClick={() => setOpenDrawer(true)}
            className={classes.openDrawer}
          />
          {/* ↓古い? */}
          {/* <Button className={classes.title}>Login</Button> */}
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Box>
  );
};
