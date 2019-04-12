import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

class LibraryMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {
        detailsTitle: 'PRUEBA',
        detailsContent: ''
      }
    }
  }

  handleChangeTitle = (title) => {
    this.setState({
      ...this.state,
      details: {detailsTitle: title}
    })
  }
  /*
  handle...
  ->Cargar Title que viene de Library Navigation por el metodo onclick
  ->Cargar contenido al state desde props.
  */

  render() {
    return (
      <div className="librarymain-content">
        <div className="navi">
          <LibraryNavigation 
            dataUser={this.props.dataUser}
            handleChangeTitle={this.handleChangeTitle}
          />
        </div>
        <div className="det">
          <LibraryDetails 
            className="det" 
            name={this.state.details.detailsTitle}
          />
        </div>
      </div>
    )
  }
}

export default LibraryMain;
