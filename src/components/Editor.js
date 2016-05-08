import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SaveIcon from 'material-ui/svg-icons/action/done';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import React from 'react';

const saveButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px"
};

const deleteButtonButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "80px"
};

export default class Editor extends React.Component {

    constructor(props) {
        super(props);

        let file = props.file || {
            name:"",
            content:""
        };

        this.state = {
            file:file
        };
    }

    onChangeFilename(event){
        let state = this.state;
        state.file.name = event.target.value;
        this.setState(state);
    }

    onChangeContent(event){
        let state = this.state;
        state.file.content = event.target.value;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <FloatingActionButton onClick={() => this.props.onSaveItem(this.state.file)} style={saveButtonStyle}>
                    <SaveIcon />
                </FloatingActionButton>
                <FloatingActionButton onClick={() => this.props.onDeleteItem(this.state.file.name)} style={deleteButtonButtonStyle}>
                    <DeleteIcon />
                </FloatingActionButton>
                <TextField
                    onChange={(event) => this.onChangeFilename(event)}
                    value={this.state.file.name}
                    hintText="Write the name of the file"
                    fullWidth={true}
                    floatingLabelText="Filename"/>
                <TextField
                    onChange={(event) => this.onChangeContent(event)}
                    value={this.state.file.content}
                    hintText="Write the content of the file"
                    fullWidth={true}
                    multiLine={true}
                    rows={5}
                    floatingLabelText="Content"/>
            </div>
        );
    }
}
