import React from "react";

export default function TrackDetails({
  showTrackDetails,
  track,
  handleDeleteTrack,
  handleShowTrackDetailsClick
}) {
  if (!track) return <div></div>;

  return (
    <div className="tracks">
      <h2>{track.title}</h2>
      <p>Track duration: {track.duration} seconds</p>
      <p> Published by: {track.publisher_title}</p>
      <p> Release date: {track.release_date}</p>
      {track.artists == "" ? (
        <p>Unknown artists</p>
      ) : (
        <p> Artist(s): {track.artists}</p>
      )}
      {showTrackDetails || (
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
