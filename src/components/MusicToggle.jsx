import React, { useState, useRef } from 'react';
import musicOn from '../assets/music-on.png';
import musicOff from '../assets/music-off.png';
import musicFile from '../assets/music.mp3';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(musicFile));

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-2 right-10 z-50">
      <button
        onClick={toggleMusic}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 ${
          isPlaying ? 'animate-spin-slow' : ''
        }`}
      >
        <img
          src={isPlaying ? musicOn : musicOff}
          alt="Music Toggle"
          className="w-full h-full object-contain"
        />
      </button>
    </div>
  );
};

export default MusicToggle;
