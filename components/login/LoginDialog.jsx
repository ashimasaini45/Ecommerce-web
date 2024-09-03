

import { Dialog,  DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const LoginDialog = ({ open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>
            Login
            <IconButton
              edge="end"
              color="inherit"
              onClick={onClose}  // Trigger onClose when close icon is clicked
              aria-label="close"
              style={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            Hello
          </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;