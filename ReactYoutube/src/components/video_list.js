import React from 'react'; 
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        //key is the identifier for the list item, 
        return <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} 
            video ={video } /> 
    });
    return(
        //This project uses bootstrap included in index.html for styling
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList; 