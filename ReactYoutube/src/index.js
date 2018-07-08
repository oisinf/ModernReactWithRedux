import React , {Component} from 'react'; //React used to create components
import ReactDOM from 'react-dom'; //ReactDOM used to interact with the DOM
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD5Kfx7llboQ_IzflH0cKLLQ97ZyP8QS7I';

// Create new component, component produces HTML. this is a class
class App extends Component{
    constructor(props){
        super(props); 

        this.state = {
            selectedVideo: null, 
            videos: []
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
            selectedVideo: videos[0] 
            });
            //this.setState({videos: videos}); the same as above
        });
    }
    render(){

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 

        return ( 
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos} />    
            </div>
        );
    }
}
//Take this component of generated HTML and put in the DOM
//<App \> = instance
ReactDOM.render(<App />, document.querySelector('.container'));