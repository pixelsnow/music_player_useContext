import { useState } from "react";

import PlayerControls from "./components/PlayerControls";
import TrackList from "./components/TrackList";

import ghostbees from "./assets/ghostbees.mp3";
import headache from "./assets/headache.mp3";
import hop from "./assets/hop.mp3";

import "./App.css";

import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Ghost Bees",
        file: ghostbees,
      },
      {
        name: "Grouper - Headache",
        file: headache,
      },
      {
        name: "Hop Along",
        file: hop,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <h1>Music!</h1>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
