import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import React from 'react';

const style = {
  position: "fixed",
  bottom: "20px",
  right: "20px"
};

export default class App extends React.Component {
  render() {
      return (
        <div>
            <AppBar
              title="electron-file-editor"
              showMenuIconButton={false}/>
          <FloatingActionButton style={style}>
              <ContentAdd />
          </FloatingActionButton>
        </div>
      );
  }
}
