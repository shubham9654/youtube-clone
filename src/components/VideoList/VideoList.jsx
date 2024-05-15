
import VideoItem from './VideoItem.jsx';

function VideoList(props) {
  const renderVideos = props.videoList.map(video => {
    return <VideoItem
      key={video.id.videoId}
      video={video}
      handleSelectedVideo={props.handleSelectedVideo}
    />;
  });

  return (
    <div className="ui relaxed divided list">
      {renderVideos}
    </div>
  )
}

export default VideoList;