import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepBackward,
  faStepForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
  const music = useMusicPlayer();
  return (
    <div className="controls_container">
      {music.currentTrackName && (
        <div className="track_name">
          <p>{music.currentTrackName}</p>
        </div>
      )}
      <div className="controls">
        <button onClick={music.playPreviousTrack}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={music.togglePlay}>
          {music.isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={music.playNextTrack}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
