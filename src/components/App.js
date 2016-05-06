import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import React from 'react';
import Files from '../model/Files';

import FileList from './FileList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files:[]
        };
    }

    componentDidMount() {
        Files.list().then((files) => {
            this.setState({
                files:files
            })
        });
    }

    onDeleteClick(file){
        Files.remove(file).then((files) => {
            this.setState({
                files:files
            })
        });
    };

    onItemClick(file){
        alert(file);
    };

    render() {
        return (
            <div>
                <AppBar
                    title="electron-file-editor"
                    showMenuIconButton={false}/>
                <FileList
                    onClick={this.onItemClick}
                    files={this.state.files}/>
            </div>
        );
    }
}
