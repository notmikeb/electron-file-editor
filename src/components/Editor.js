import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SaveIcon from 'material-ui/svg-icons/action/done';
import React from 'react';

const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px"
};

export default class Editor extends React.Component {
    render() {
        return (
            <div>
                <FloatingActionButton onClick={() => this.props.onSaveItem()} style={style}>
                    <SaveIcon />
                </FloatingActionButton>
                <TextField
                    hintText="Write the name of the file"
                    floatingLabelText="Filename"/>
            </div>
        );
    }
}
