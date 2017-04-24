import React, { Component } from 'react';
import './MBCytconnector.css';
import $ from 'jquery';

class MBCYTConnector extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount = () => {
    var thisContext=this;
    $.get("https://content.googleapis.com/youtube/v3/playlistItems?maxResults=12&part=snippet&playlistId=<PLAYLIST_ID>&key=<YOUR_API_KEY>", function (data) {
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

class Video extends MBCYTConnector {
  render() {
    if (!this.state.items || this.state.items.length === 0) {
      return null;
    }
    var videos = [];
    for (var i = 0; i < 4; i++){
      videos.push(
        <ul id="thumbs" class="portfolio">
          <li class="col-lg-3 design" data-id="id-0" data-type="web">
            <iframe width="260" height="195" src={'https://www.youtube.com/embed/' + this.state.items[i].snippet.resourceId.videoId} frameborder="0" allowfullscreen></iframe>
          </li>
        </ul>
      )
    }
    return(
      <div>
        {videos}
      </div>
    )
  }
}

export default App;
