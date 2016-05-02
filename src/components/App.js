import AppBar from 'material-ui/lib/app-bar';
import React from 'react';

export default class App extends React.Component {
  render() {
      return (
        <div>
            <AppBar
              title="electron-file-editor"
              zDepth={1}/>
        </div>
      );
  }
}
