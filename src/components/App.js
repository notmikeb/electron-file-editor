import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import React from 'react';
import Files from '../model/Files';

import FileList from './FileList';
import Editor from './Editor';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files:[],
            selectedFile:null
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

    onNewItem(){
        this.setState(Object.assign(this.state,{
            selectedFile:{
                name:"",
                content:""
            }
        }));
    }

    onSaveItem(file){
        alert(file);
    }

    render() {

        let currentPage;
        if(!this.state.selectedFile){
            currentPage = (
                <FileList
                    onNewItemClick={() => {this.onNewItem()}}
                    onClick={this.onItemClick}
                    files={this.state.files}/>
            );
        }else{
            currentPage = (
                <Editor
                    onSaveItem={() => {this.onSaveItem()}}/>
            );
        }

        return (
            <div>
                <AppBar
                    title="electron-file-editor"
                    showMenuIconButton={false}/>
                {currentPage}
            </div>
        );
    }
}
