import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBk9tpagB0QPCAQfDF8Y26TvzKWTFKm_UY';

import Searchbar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo : null };
    this.videoSearch('gatos');

  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {
    const videoSeach = _.debounce((term)=> {this.videoSearch(term)},300);
    return (
      <div>
        <Searchbar onSearchTermchange={videoSeach}/>
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.querySelector('.container'));
