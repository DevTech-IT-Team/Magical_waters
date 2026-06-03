import React, { useState, useRef, useEffect } from 'react';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const defaultVolume = 0.75;

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = defaultVolume;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.warn('Autoplay blocked or failed:', error);
          setIsPlaying(false);
        });
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Playback failed:', error);
            setIsPlaying(false);
            alert('Audio playback failed. Please try again.');
          });
      }
    }
  };

  return (
    <div className="flex items-center justify-end">
      <audio ref={audioRef} src="/water.mp3" loop preload="auto" autoPlay playsInline />
      <button
        onClick={toggleAudio}
        className="flex items-center gap-2 rounded-full bg-slate-900/90 text-white px-4 py-3 shadow-xl shadow-slate-900/10 transition hover:bg-slate-800"
        title={isPlaying ? 'Pause 528 Hz Water Sound' : 'Play 528 Hz Water Sound'}
      >
        <span className={`h-2.5 w-2.5 rounded-full ${isPlaying ? 'bg-emerald-400' : 'bg-slate-400'}`} />
        <span className="text-xs font-semibold tracking-[0.18em] uppercase">
          {isPlaying ? 'Sound On' : 'Sound Off'}
        </span>
      </button>
    </div>
  );
};

export default AudioToggle;
