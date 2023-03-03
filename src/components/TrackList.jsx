import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const TrackList = () => {
  const music = useMusicPlayer();
  return (
    <div className="tracklist">
      {music.trackList.map((track, index) => (
        <div key={index} className="track">
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div>{track.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
