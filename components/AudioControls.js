"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  // Simulate chiptune audio (in a real implementation, you'd load actual audio files)
  useEffect(() => {
    // Create audio context for sound effects
    if (typeof window !== 'undefined') {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        audioRef.current = audioContext;
      } catch (error) {
        console.log('Web Audio API not supported');
      }
    }
  }, []);

  const playBeep = useCallback((frequency = 440, duration = 100, type = 'square') => {
    if (!audioRef.current) return;

    try {
      const oscillator = audioRef.current.createOscillator();
      const gainNode = audioRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioRef.current.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(volume, audioRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioRef.current.currentTime + duration / 1000);

      oscillator.start(audioRef.current.currentTime);
      oscillator.stop(audioRef.current.currentTime + duration / 1000);
    } catch (error) {
      console.log('Audio playback failed');
    }
  }, [volume]);

  const playSelectSound = useCallback(() => {
    playBeep(800, 50, 'square');
  }, [playBeep]);

  const playConfirmSound = useCallback(() => {
    playBeep(1200, 80, 'square');
    setTimeout(() => playBeep(1600, 80, 'square'), 80);
  }, [playBeep]);

  const playErrorSound = useCallback(() => {
    playBeep(200, 150, 'sawtooth');
  }, [playBeep]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      playConfirmSound();
    } else {
      playSelectSound();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    playBeep(440, 50, 'square');
  };

  // Add sound effects to button clicks globally
  useEffect(() => {
    const addClickSounds = () => {
      const buttons = document.querySelectorAll('button, a[href]');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', playSelectSound);
        button.addEventListener('click', playConfirmSound);
      });
    };

    // Add sounds to existing elements
    addClickSounds();

    // Add sounds to new elements (debounced)
    const observer = new MutationObserver(() => {
      setTimeout(addClickSounds, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      const buttons = document.querySelectorAll('button, a[href]');
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', playSelectSound);
        button.removeEventListener('click', playConfirmSound);
      });
    };
  }, [volume, playSelectSound, playConfirmSound]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2">
        {/* Music Toggle */}
        <button
          onClick={toggleMusic}
          className={`pixel-border w-10 h-10 flex items-center justify-center transition-all duration-200 pixel-shadow ${isPlaying
            ? 'bg-accent text-background animate-pulse'
            : 'bg-muted text-foreground hover:bg-accent/20'
            }`}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          <span className="text-lg">
            {isPlaying ? '🎵' : '🔇'}
          </span>
        </button>

        {/* Audio Settings */}
        <button
          onClick={() => setShowControls(!showControls)}
          className="pixel-border w-10 h-10 flex items-center justify-center bg-muted text-foreground hover:bg-accent/20 transition-all duration-200 pixel-shadow"
          title="Audio Settings"
        >
          <span className="text-lg">
            🔊
          </span>
        </button>
      </div>

      {/* Expanded Controls */}
      {showControls && (
        <div className="absolute top-full right-0 mt-2 pixel-border bg-muted/95 backdrop-blur-sm p-4 pixel-shadow animate-pixel-bounce min-w-56">
          <div className="flex items-center gap-3">
            <span className="text-xs text-secondary font-bold">VOL:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-2 bg-background pixel-border"
              style={{
                background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${volume * 100}%, var(--muted) ${volume * 100}%, var(--muted) 100%)`
              }}
            />
            <span className="text-xs text-foreground min-w-8">
              {Math.round(volume * 100)}%
            </span>
          </div>

          <div className="mt-3 text-xs text-muted">
            <div className="flex justify-between">
              <span>🎵 Music:</span>
              <span className={isPlaying ? 'text-accent' : 'text-muted'}>
                {isPlaying ? 'ON' : 'OFF'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>🔊 SFX:</span>
              <span className="text-accent">ON</span>
            </div>
          </div>

          <div className="mt-3 flex gap-1">
            <button
              onClick={() => playBeep(523, 100, 'square')}
              className="flex-1 pixel-border bg-background text-foreground px-2 py-1 text-xs hover:bg-accent/20 transition-colors"
            >
              TEST
            </button>
            <button
              onClick={() => setShowControls(false)}
              className="flex-1 pixel-border bg-accent text-background px-2 py-1 text-xs hover:bg-secondary transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Now Playing Indicator */}
      {isPlaying && (
        <div className="absolute top-full right-0 mt-2 pixel-border bg-accent/20 px-3 py-1 text-xs text-accent text-center animate-blink">
          ♪ NOW PLAYING: Chiptune Beats ♪
        </div>
      )}
    </div>
  );
}
