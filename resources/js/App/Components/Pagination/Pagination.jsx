import React from "react";

export default function Pagination({
  showButton,
  showButton2,
  showTrackDetails,
  setFirstOffset,
  firstOffset
}) {
  const handleNextPageClick = () => {
    setFirstOffset(firstOffset + 4);
  };

  const handleLastPageClick = () => {
    setFirstOffset(firstOffset - 4);
  };

  const shouldShowPreviousPage = () => {
    return showButton2 && showTrackDetails == false;
  };

  const shouldShowNextPage = () => {
    return showButton && showTrackDetails == false;
  };

  return (
    <>
      {shouldShowPreviousPage() && (
        <button onClick={handleLastPageClick} className="buttons">
          Previous page of results
        </button>
      )}

      {shouldShowNextPage() && (
        <button onClick={handleNextPageClick} className="buttons">
          Next page of results
        </button>
      )}
    </>
  );
}
