import * as React from 'react';
import {observer} from 'mobx-react';
import {IRootStore} from './Interfaces';
import {Button, Chip, Divider, FormControlLabel, Switch, FormGroup, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, Toolbar, Typography, Tooltip, Icon} from 'material-ui';

const styles = {
  column: {
    flexBasis: '50%',
  },
}
class UserListToolbar extends React.Component<{tableState: any}, {expanded: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: false,
    }
  }
  render() {
    return (
      <ExpansionPanel expanded={this.state.expanded} onChange={this.handleExpand}>
          <ExpansionPanelSummary expandIcon={<Icon aria-label="Filter list">details</Icon>}>

      <Typography variant="title" id="tableTitle">
        Users List
      </Typography>

    </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* <div style={styles.column}>
              <FormGroup row>
                {this.props.usersList.userKeys.map((item: string) =>
                <FormControlLabel
                control={
                  <Switch
                    // checked={}
                    // onChange={}
                    value="checkedA"
                  />
                }
                label={item}
              /> )}
              </FormGroup>
          </div> */}
          <div style={styles.column}>
            <Typography variant="caption">
              Select items to view
            </Typography>
          </div>
          </ExpansionPanelDetails>
          <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary" onClick={this.handleExpand}>
            Close
          </Button>
        </ExpansionPanelActions>

        </ExpansionPanel>
    )
  }

  handleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
}

export default observer(UserListToolbar);