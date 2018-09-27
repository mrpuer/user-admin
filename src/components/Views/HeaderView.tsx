import {AppBar, Button, Icon, IconButton, Toolbar, Tooltip, Typography} from "material-ui";
import { observer } from "mobx-react";
import * as React from "react";

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
};

const HeaderView = ({isLogged, switchLogin}: {isLogged: boolean, switchLogin: any}) => (
  <div style={styles.root}>
    <AppBar position="static">
      <Toolbar>
      <IconButton color="inherit" aria-label="logo" style={styles.menuButton}>
        <Tooltip id="tooltip-icon" title="Welcome!"><Icon>face</Icon></Tooltip>
      </IconButton>
        <Typography variant="title" color="inherit" style={styles.flex}>
         Users Admin Panel
        </Typography>
         {isLogged &&
         <IconButton color="inherit" onClick={switchLogin}>
          <Tooltip id="tooltip-icon" title="Logout">
            <Icon>directions_run</Icon>
          </Tooltip>
          </IconButton>}
      </Toolbar>
    </AppBar>
  </div>
);

export default observer(HeaderView);
