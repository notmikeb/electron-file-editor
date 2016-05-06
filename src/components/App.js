import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import React from 'react';
import Files from '../model/Files';

const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px"
};

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

    onDeleteClick(index){
        alert(index);
    };

    onListClick(file){
        alert(file);
    };

    printFiles(){
        let files = this.state.files;
        return files.map((file,index) => {
            let deleteIcon = (<DeleteIcon onClick={this.onDeleteClick.bind(this,index)} />);
            return (
                <ListItem
                    key={index}
                    onClick={this.onListClick.bind(this,file)}
                    primaryText={file}
                    rightIcon={deleteIcon} />
            );
        });
    }

    render() {
        return (
            <div>
                <AppBar
                    title="electron-file-editor"
                    showMenuIconButton={false}/>
                <FloatingActionButton style={style}>
                    <ContentAdd />
                </FloatingActionButton>
                <List>
                    {this.printFiles()}
                </List>
            </div>
        );
    }
}
