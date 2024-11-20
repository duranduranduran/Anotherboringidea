import React from 'react';
import ReactPlayer from 'react-player';

const VideoGallery = ({ videoUrl, thumbnailUrl, loop, controls }) => {
    return (
        <ReactPlayer
            url={videoUrl}
            poster={thumbnailUrl}
            loop={loop}
            controls={controls}
            width="100%"
            height="100%"
        />
    );
};

VideoGallery.defaultProps = {
    loop: true,
    controls: false,
};

export default VideoGallery;