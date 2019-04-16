import React, { Component } from 'react';
import LibraryNavigation from './LibraryNavigation';
import LibraryDetails from './LibraryDetails';
import '../styles/LibraryMain.css';

class LibraryMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {
        detailsTitle: 'playlist'
      }
    }
  }

  handleChangeTitle = (title) => {
    this.setState({
      ...this.state,
      details: {...this.state.details, detailsTitle: title}
    })
  }
  /*
  handle...
  ->Cargar Title que viene de Library Navigation por el metodo onclick
  ->Cargar contenido al state desde props.
  */

  //category => category.keys === this.state.details.detailsTitle
  render() {
    const content = this.props.contentDetails[this.state.details.detailsTitle];
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
            title={this.state.details.detailsTitle}
            contentCategory={content}
          />
        </div>
      </div>
    )
  }
}

export default LibraryMain;
