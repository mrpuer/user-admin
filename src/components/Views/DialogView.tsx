import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "material-ui";
import * as React from "react";

// interface IDialogView {
//   state: any;
//   content: {
//     title: string,
//     description: string,
//     switchVar: any,
//     switchFunc: any,
//     actionFunc?: any,
//   };
// }

const DialogView = ({content, children}: any) => {
  return (
    <Dialog
      open={content.switchVar}
      onClose={content.switchFunc}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{content.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
        {content.description}
        </DialogContentText>
        {children && children}
      </DialogContent>
      <DialogActions>
        <Button onClick={content.switchFunc} color="primary">
          Cancel
        </Button>
        {content.actionFunc && <Button onClick={content.actionFunc} color="primary">OK</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default DialogView;
