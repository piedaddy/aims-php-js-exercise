import React from "react";
import Track from "./Track";

export default function TrackList({
  tracks,
  firstOffset,
  secondOffset,
  showTrackDetails,
  handleDeleteTrack,
  handleShowTrackDetailsClick
}) {
  if (!tracks) return <strong>Something's wrong, ooooops!</strong>;
  const content =
    tracks &&
    tracks.map((track, index) => {
      return (
        <Track
          track={track}
          key={index}
          showTrackDetails={showTrackDetails}
          handleDeleteTrack={handleDeleteTrack}
          handleShowTrackDetailsClick={handleShowTrackDetailsClick}
        />
      );
    });
  const newContent = content.slice(firstOffset, secondOffset);

  return <div>{newContent}</div>;
}
