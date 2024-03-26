'use client'

import { useEffect, useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div>

      <iframe
        width="800"
        height="500"
        title="YouTube video player"
        frameBorder="0"
        src=""
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
