import {AppBar, Toolbar, Typography} from "material-ui";
import * as React from "react";

const HeaderView = () => (
  <div className="header">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Users Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default HeaderView;
