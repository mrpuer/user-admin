import {AppBar, Toolbar, Typography} from "material-ui";
import * as React from "react";

const HeaderView = () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Users Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
);

export default HeaderView;
