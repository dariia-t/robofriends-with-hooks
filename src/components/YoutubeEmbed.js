import React from "react";

const YoutubeEmbed = ({link}) => {
    return (
        <iframe src={link}
        width='560'
        height='315'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        />
    )
}

export default YoutubeEmbed;