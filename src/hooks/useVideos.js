import { useState, useEffect } from "react";

import youtube from "../apis/youtube";

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearch);
  }, [defaultSearch]);

  const search = async (term) => {
    console.log(term);

    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
  };
  return [videos, search];
};

export default useVideos;
