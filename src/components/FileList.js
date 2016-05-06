import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import React from 'react';

const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px"
};

export default class FileList extends React.Component {

    printFiles(){
        let files = this.props.files || [];
        return files.map((file,index) => {
            return (
                <ListItem
                    key={index}
                    onClick={() => this.props.onClick(file)}
                    primaryText={file}
                    rightIcon={<EditIcon />} />
            );
        });
    }

    render() {
        return (
            <div>
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
