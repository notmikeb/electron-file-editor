import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import React from 'react';

import Files from '../model/Files';
import BuildNumber from '../model/BuildNumber';

import FileList from './FileList';
import Editor from './Editor';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files:[],
            selectedFile:null,
            buildTime:""
        };
    }

    componentDidMount() {
        Files.list().then((files) => {
            this.setState(Object.assign(this.state,{
                files:files
            }));
        });

        BuildNumber.get().then((buildTime) => {
            this.setState(Object.assign(this.state,{
                buildTime:buildTime
            }));
        });
    }

    onDeleteItem(file){
        Files.remove(file).then((files) => {
            this.setState({
                files:files,
                selectedFile: null
            })
        });
    };

    onItemClick(filename){
        Files.getContent(filename).then((content) => {
            this.setState(Object.assign(this.state,{
                selectedFile:{
                    name:filename,
                    content:content
                }
            }));
        });
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
        Files.save(file.name,file.content).then((files) => {
            this.setState({
                files:files,
                selectedFile: null
            })
        });
    }

    render() {

        let currentPage;

        if(!this.state.selectedFile){
            currentPage = (
                <FileList
                    onNewItemClick={this.onNewItem.bind(this)}
                    onClick={this.onItemClick.bind(this)}
                    files={this.state.files}/>
            );
        }else{
            currentPage = (
                <Editor
                    file={this.state.selectedFile}
                    onDeleteItem={this.onDeleteItem.bind(this)}
                    onSaveItem={this.onSaveItem.bind(this)}/>
            );
        }

        return (
            <div>
                <AppBar
                    title={'electron-file-editor - ' + this.state.buildTime}
                    showMenuIconButton={false}/>
                {currentPage}
            </div>
        );
    }
}
