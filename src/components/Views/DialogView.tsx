import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "material-ui";
import * as React from "react";

interface IDialogView {
  children: any;
  state: any;
  content: {
    title: string,
    description: string,
    switchVar: any,
    switchFunc: any,
    actionFunc?: any,
  };
}

const DialogView = (props: IDialogView) => {
  return (
    <Dialog
      open={props.content.switchVar}
      onClose={props.content.switchFunc}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.content.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {props.content.description}
        </DialogContentText>
        {props.children && props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.content.switchFunc} color="primary">
          Cancel
        </Button>
        {props.content.actionFunc && <Button onClick={props.content.actionFunc} color="primary">OK</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default DialogView;
