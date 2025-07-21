"use client";

import { useState, useRef, useEffect } from "react";

export default function GameVideo({ 
  src, 
  poster, 
  title, 
  description, 
  controls = true, 
  autoPlay = false,
  muted = true,
  loop = false,
  className = "",
  pixelBorder = true 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  // Cleanup video only when component unmounts
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className={`relative ${pixelBorder ? 'pixel-border' : ''} ${className}`}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/80 z-10">
          <div className="text-accent animate-pulse">Loading...</div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-auto pixel-perfect"
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
        playsInline
        onPlay={handlePlay}
        onPause={handlePause}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser doesn&apos;t support video playback.
      </video>

      {/* Custom play button overlay (only if controls are disabled) */}
      {!controls && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
        >
          <div className="text-4xl text-white">
            {isPlaying ? '⏸️' : '▶️'}
          </div>
        </button>
      )}

      {/* Video info */}
      {(title || description) && (
        <div className="mt-2 p-2">
          {title && (
            <h4 className="text-sm font-bold text-accent mb-1">
              {title}
            </h4>
          )}
          {description && (
            <p className="text-xs text-muted">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Play indicator */}
      {isPlaying && (
        <div className="absolute top-2 right-2 text-accent animate-pulse">
          ● LIVE
        </div>
      )}
    </div>
  );
}