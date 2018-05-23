import {AppBar, Icon, IconButton, Toolbar, Typography} from "material-ui";
import * as React from "react";

const HeaderView = () => (
    <AppBar position="static">
      <Toolbar>
      <IconButton color="inherit" aria-label="logo">
        <Icon>face</Icon>
      </IconButton>
        <Typography variant="title" color="inherit">
         Users Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
);

export default HeaderView;
