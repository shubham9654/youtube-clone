import { useState, useEffect } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import VideoList from './components/VideoList/VideoList.jsx';

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleTermSubmit('songs');
  }, []);

  const handleTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term //officially q is query in youtube api
      }
    })
      .then(response => {
        setVideoList(response.data.items);
        setSelectedVideo(response.data.items[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container" style={{ marginTop: "5vh" }}>
      <SearchBar handleTermSubmit={handleTermSubmit} />
      <div className="ui grid" style={{ marginTop: "3vh" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videoList={videoList}
              handleSelectedVideo={handleSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

