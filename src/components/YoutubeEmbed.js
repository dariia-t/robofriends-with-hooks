import React from "react";

const YoutubeEmbed = ({link}) => {
    return (
        <iframe src={link}
        width='560'
        height='315'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        />
    )
}

export default YoutubeEmbed;