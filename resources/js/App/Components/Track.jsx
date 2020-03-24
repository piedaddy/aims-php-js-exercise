import React from "react";

export default function Track({
  showTrackDetails,
  track,
  artistsShown,
  handleDeleteTrack,
  handleShowTrackDetailsClick
}) {
  const shouldShowArtists = () => {
    return track.artists && artistsShown;
  };

  return (
    <div className="tracks">
      <h2>{track.title}</h2>
      <p>Track duration: {track.duration} seconds</p>
      <p> Published by: {track.publisher_title}</p>
      <p> Release date: {track.release_date}</p>
      {shouldShowArtists() && <p> Artist(s): {track.artists}</p>}
      {showTrackDetails ? (
        " "
      ) : (
        <TrackDetailButton
          track={track}
          handleShowTrackDetailsClick={handleShowTrackDetailsClick}
        />
      )}
      <DeleteTrackButton track={track} handleDeleteTrack={handleDeleteTrack} />
    </div>
  );
}

function TrackDetailButton({ handleShowTrackDetailsClick, track }) {
  return (
    <button onClick={() => handleShowTrackDetailsClick(track.id)}>
      Track details
    </button>
  );
}
function DeleteTrackButton({ handleDeleteTrack, track }) {
  return (
    <button value={track.id} onClick={() => handleDeleteTrack(track.id)}>
      Delete
    </button>
  );
}
