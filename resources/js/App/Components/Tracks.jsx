import React, { useEffect, useState } from "react";
import TrackList from "./TrackList";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";
import TrackDetails from "./TrackDetails";
import { fetchTracks, deleteTrack } from "../../Api/tracks";

export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [showTrackDetails, setShowTrackDetails] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const secondOffset = firstOffset + 4;
  const showButton = tracks && secondOffset < tracks.length;
  const showButton2 = firstOffset > 0;

  const getTracks = async () => {
    const tracks = await fetchTracks();
    setTracks(tracks);
  };

  useEffect(() => {
    getTracks();
  }, []);

  const handleShowTrackDetailsClick = async id => {
    setShowTrackDetails(true);
    setCurrentTrack(id);
  };

  const handleTextInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleDeleteTrack = async id => {
    try {
      await deleteTrack(id);
      const newTracks = tracks.filter(track => track.id !== id);
      setTracks(newTracks);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleShowTrackListClick = () => {
    setShowTrackDetails(false);
    getTracks();
  };

  return (
    <div>
      <button className="button" onClick={handleShowTrackListClick}>
        Back to track list
      </button>

      <Search
        handleTextInputChange={handleTextInputChange}
        searchValue={searchValue}
        setTracks={setTracks}
      />
      {showTrackDetails ? (
        <TrackDetails
          track={tracks.find(track => track.id === currentTrack)}
          showTrackDetails={showTrackDetails}
          handleDeleteTrack={handleDeleteTrack}
          handleShowTrackDetailsClick={handleShowTrackDetailsClick}
        />
      ) : (
        <TrackList
          firstOffset={firstOffset}
          secondOffset={secondOffset}
          tracks={tracks}
          showTrackDetails={showTrackDetails}
          handleDeleteTrack={handleDeleteTrack}
          handleShowTrackDetailsClick={handleShowTrackDetailsClick}
        />
      )}
      <Pagination
        showTrackDetails={showTrackDetails}
        showButton2={showButton2}
        showButton={showButton}
        firstOffset={firstOffset}
        setFirstOffset={setFirstOffset}
      />
    </div>
  );
}
