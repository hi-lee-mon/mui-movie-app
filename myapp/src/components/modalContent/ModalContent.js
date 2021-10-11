import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const ModalContent = ({ id }) => {
  const [videoId, setVideoId] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    setVideoId(data?.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return <YouTube videoId={videoId} opts={opts} />;
};

export default ModalContent;
