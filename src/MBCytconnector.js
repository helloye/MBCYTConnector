import React, { Component } from 'react';
import './MBCytconnector.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    var thisContext=this;
    $.get("https://content.googleapis.com/youtube/v3/playlistItems?maxResults=12&part=snippet&playlistId=UUy0se5ZyFWqD5NA4p6xS0bw&key=AIzaSyBuWdKTzHxM6gT1BtGxFiTAk1H1yhcZtss", function (data) {
      thisContext.setState(data);
    })
  }
  render() {
    return (
      <div>
        <Video />
      </div>
    );
  }
}

class Video extends App {
  render() {
    if (!this.state.items || this.state.items.length === 0) {
      return null;
    }
    return(
      <div>
        <ul>
          <li>
            <iframe width="260" height="195" src={'https://www.youtube.com/embed/' + this.state.items[0].snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="260" height="195" src={'https://www.youtube.com/embed/' + this.state.items[1].snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="260" height="195" src={'https://www.youtube.com/embed/' + this.state.items[2].snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="260" height="195" src={'https://www.youtube.com/embed/' + this.state.items[3].snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;