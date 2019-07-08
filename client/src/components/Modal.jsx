import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {addContent, deleteContent, setInitial, deleteAllContent} from "../actions/landingpage";


class FormDialog extends Component {
    state = {
        open: false,
        password: "",
        error: false,
        helperText: ""
    };
    handleChangeField = event => {
        this.setState({password: event.target.value});
    };
    handleSubmit = event => {
        event.preventDefault();
        this.state.password === "password" ?
            this.removeAll() :
            this.setState({open: true, error: true, helperText: "Incorrect Password"});
    };

    handleClickOpen = () => {
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
    };

    removeAll = async () => {
        this.setState({open: false});
        await fetch("/questions", {
            method: "DELETE"
        });
        this.props.deleteAllContent();
    };


    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Delete All
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={this.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Are you sure you want to delete all requests?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To delete all requests, please confirm by entering the password here.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Password"
                                type="password"
                                fullWidth
                                onChange={this.handleChangeField}
                                value={this.state.password}
                                error={this.state.error}
                                helperText={this.state.helperText}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" type="submit">
                                Confirm
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {count: state.count};
};

export default connect(
    mapStateToProps,
    {setInitial, addContent, deleteContent, deleteAllContent}
)(FormDialog);