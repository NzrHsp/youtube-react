import axios from "axios";

const KEY = "AIzaSyDrXmooxg8s6mo0nDuUboYKptK16fShTvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
