import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Grid,
  Hidden,
  Switch,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";
import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { videos } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 220,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
  logo: {
    height: 20,
  },
  menuIcon: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
  icons: {
    paddingRight: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
}));

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/logo-youtube-dark.png"
                : "/images/logo-youtube.png"
            }
            alt="logo"
            className={classes.logo}
          />

          <div className={classes.grow} />

          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />

          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button className={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    className={{
                      primary: classes.listItemText,
                    }}
                    primary={"Início"}
                  />
                </ListItem>

                <ListItem button className={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    className={{
                      primary: classes.listItemText,
                    }}
                    primary={"Em alta"}
                  />
                </ListItem>

                <ListItem button className={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    className={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>
              <Divider />
            </div>
            <List>
              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Biblioteca"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<History />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Histórico"}
                />
              </ListItem>
            </List>

            <Divider />

            <Box p={3}>
              <Typography variant="body2">
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircle />}
                >
                  Fazer login
                </Button>
              </Box>
            </Box>

            <Divider />

            <List component="nav" aria-labelledby="nested-list-subheader">
              <ListSubheader>O MELHOR DO YOUTUBE</ListSubheader>
              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Música"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Esportes"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Jogos"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Filmes"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Notícias"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Ao vivo"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Aprender"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Vídeos do momento"}
                />
              </ListItem>

              <ListItem button className={{ root: classes.listItem }}>
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText
                  className={{
                    primary: classes.listItemText,
                  }}
                  primary={"Vídeo em 360°"}
                />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>

        <Box p={5}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: "bold" }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} - ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
