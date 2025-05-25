import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { Podcast, Music } from '../../data/resourcesData';

interface MediaPlayerProps {
  mediaItems: (Podcast | Music)[];
  type: 'podcast' | 'music';
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ mediaItems, type }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const currentTrack = mediaItems[currentTrackIndex];
  
  useEffect(() => {
    // Reset state when changing tracks
    setIsPlaying(false);
    setCurrentTime(0);
    
    // Small delay to let the audio element update its src
    const timer = setTimeout(() => {
      if (isPlaying && audioRef.current) {
        audioRef.current.play().catch(err => console.error('Playback failed:', err));
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentTrackIndex]);
  
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error('Playback failed:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      // Wrap around to the last track
      setCurrentTrackIndex(mediaItems.length - 1);
    }
  };
  
  const handleNext = () => {
    if (currentTrackIndex < mediaItems.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      // Wrap around to the first track
      setCurrentTrackIndex(0);
    }
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleTrackEnded = () => {
    // Auto-play next track
    handleNext();
  };
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };
  
  // Format time in MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="rounded-lg overflow-hidden aspect-square shadow-md">
              <img 
                src={currentTrack.imageUrl} 
                alt={currentTrack.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{currentTrack.title}</h3>
              <p className="text-gray-600">{currentTrack.artist || currentTrack.host}</p>
            </div>
            
            <p className="text-gray-700 mb-6">{currentTrack.description}</p>
            
            <div className="mb-4">
              <div 
                ref={progressRef}
                className="h-2 bg-gray-200 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-primary-500 rounded-full relative"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-primary-500"></div>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? formatTime(duration) : '--:--'}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handlePrevious}
                >
                  <SkipBack size={20} className="text-gray-700" />
                </button>
                
                <button 
                  className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={handleNext}
                >
                  <SkipForward size={20} className="text-gray-700" />
                </button>
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                <button 
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={16} className="text-gray-700" /> : <Volume2 size={16} className="text-gray-700" />}
                </button>
                
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 px-6 py-4">
        <h4 className="font-medium text-gray-800 mb-3">{type === 'podcast' ? 'Episodes' : 'Tracks'}</h4>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                index === currentTrackIndex ? 'bg-primary-50 border border-primary-200' : 'hover:bg-gray-50'
              }`}
              onClick={() => setCurrentTrackIndex(index)}
            >
              <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 mr-3">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-gray-800 truncate">{item.title}</h5>
                <p className="text-xs text-gray-600 truncate">{item.artist || item.host}</p>
              </div>
              {index === currentTrackIndex && isPlaying && (
                <div className="ml-2 flex items-center space-x-1">
                  <motion.div
                    animate={{ height: [4, 12, 4] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-1 bg-primary-500 rounded-full"
                  />
                  <motion.div
                    animate={{ height: [4, 16, 4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-1 bg-primary-500 rounded-full"
                  />
                  <motion.div
                    animate={{ height: [4, 8, 4] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-1 bg-primary-500 rounded-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleTrackEnded}
        preload="metadata"
      />
    </div>
  );
};

export default MediaPlayer;