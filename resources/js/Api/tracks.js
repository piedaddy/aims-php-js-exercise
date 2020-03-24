const urlPrefix = "http://www.aims.test:8080/";
const tracksUrl = `${urlPrefix}api/tracks`;

export const fetchTracks = async () => {
  try {
    const response = await fetch(tracksUrl);
    return response.json();
  } catch (err) {
    console.log("fetchTracks error", err);
  }
};

export const deleteTrack = async id => {
  const response = await fetch(`${tracksUrl}/${id}`, { method: "DELETE" });
  await response.json();
};
