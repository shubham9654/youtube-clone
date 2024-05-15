

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} />
      </div>
      <div className="ui segment !bg-black !p-0">
        <h4 className="ui header !text-white">
          {props.selectedVideo.snippet.title}
        </h4>
        <p className="text-white">
          {props.selectedVideo.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
