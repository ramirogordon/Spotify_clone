import React, { Component } from 'react'

class Tracks extends Component {
    componentDidMount() {
        fetch(this.props.item.tracks.href, {
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(
            response => response.json()
        ).then(
            songs => {
                console.log(songs);
                // console.log(songs.items[0].track.name);
            }
        );
    }
    render() {
        return (<>
        <ul>
            <li>
                <p>cancion 1</p>
            </li>
        </ul>
      </>
    )
  }
}

export default Tracks;
