import { combineReducers } from "redux";
//Reducers
const songsReducer = () => {
  return [
    { title: "closer", duration: "3:30" },
    { title: "takeaway", duration: "3:00" },
    { title: "high on life", duration: "4:00" },
    { title: "The nights", duration: "4:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
