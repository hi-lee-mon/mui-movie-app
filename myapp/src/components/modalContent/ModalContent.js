import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareButton,
  LineIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
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
    console.log(data);
    setVideoId(data?.results[0].key);
  };

  useEffect(() => {
    fetchVideo();
    setYoutubeLink(`https://www.youtube.com/watch?v=${videoId}`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <YouTube videoId={videoId} opts={opts} />;
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <FacebookShareButton url={youtubeLink}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton url={youtubeLink}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div>
          <EmailShareButton url={youtubeLink}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
