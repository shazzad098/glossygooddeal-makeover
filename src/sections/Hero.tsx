import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  {
    url: "https://www.pexels.com/download/video/12299044/",
    title: "Global Shipping",
    thumbnail: "https://images.pexels.com/photos/842579/pexels-photo-842579.jpeg"
  },
  {
    url: "https://www.pexels.com/download/video/10058364/",
    title: "Warehouse Logistics",
    thumbnail: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
  },
  {
    url: "https://www.pexels.com/download/video/34775814/",
    title: "Supply Chain",
    thumbnail: "https://images.pexels.com/photos/6804748/pexels-photo-6804748.jpeg"
  }
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // TypeScript Fix: Using ReturnType for browser compatibility

  // Typing animation states
  const [displayedText, setDisplayedText] = useState('');
  const [displayedSubText, setDisplayedSubText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "Innovating Your";
  const fullSubText = "Global Business";

  useEffect(() => {
    let index = 0;
    let subTypeInterval: ReturnType<typeof setInterval> | null = null;
    
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        
        let subIndex = 0;
        subTypeInterval = setInterval(() => {
          if (subIndex <= fullSubText.length) {
            setDisplayedSubText(fullSubText.slice(0, subIndex));
            subIndex++;
          } else {
            if (subTypeInterval) clearInterval(subTypeInterval);
            setIsTypingComplete(true);
          }
        }, 80);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
      if (subTypeInterval) clearInterval(subTypeInterval);
    };
  }, []);

  const updateProgress = useCallback(() => {
    const video = videoRefs.current[currentVideo];
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRefs.current[currentVideo];
    if (video) {
      if (isPlaying) {
        video.play().catch(e => console.warn("Video playback was interrupted:", e));
      } else {
        video.pause();
      }
    }
  }, [currentVideo, isPlaying]);

  const handleVideoEnd = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setProgress(0);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentVideo(index);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={video.url}
            ref={(el) => (videoRefs.current[index] = el)}
            muted={isMuted}
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            onTimeUpdate={updateProgress}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              currentVideo === index 
                ? "opacity-100 scale-100 z-10" 
                : "opacity-0 scale-110 z-0"
            }`}
            style={{
              filter: currentVideo === index ? "none" : "blur(10px)",
            }}
          >
            <source src={video.url} type="video/mp4" />
          </video>
        ))}
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_100%)] z-20" />
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-black/50 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
        <button
          onClick={handlePlayPause}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 right-8 z-40 flex gap-3">
        {videos.map((video, index) => (
          <button
            key={video.url}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
              currentVideo === index 
                ? "ring-2 ring-primary scale-110" 
                : "ring-1 ring-white/30 hover:scale-105"
            }`}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${currentVideo === index ? "bg-primary/20" : "bg-black/50"}`} />
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-30 text-center text-white px-4">
        <div className="mb-4 inline-block">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20">
            Welcome to GOOD DEAL
          </span>
        </div>
        
        {/* Typing Animation Title */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-white">
              {displayedText}
              {!isTypingComplete && displayedText !== fullText && (
                <span className="inline-block w-0.5 h-10 md:h-16 bg-primary ml-1 animate-pulse" />
              )}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {displayedSubText}
              {!isTypingComplete && displayedSubText !== fullSubText && displayedSubText.length > 0 && (
                <span className="inline-block w-0.5 h-10 md:h-16 bg-primary ml-1 animate-pulse" />
              )}
            </span>
          </h1>
          {/* Completion indicator */}
          {isTypingComplete && (
            <div className="flex justify-center mt-2">
              <div className="w-12 h-0.5 bg-primary animate-pulse" />
            </div>
          )}
        </div>
        
        <Reveal delay={200}>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Leading the way in global export-import and sustainable supply solutions.
            We connect businesses worldwide with efficiency and reliability.
          </p>
        </Reveal>
        
        <Reveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              asChild
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-xl shadow-blue-500/25 transition-all duration-300"
            >
              <Link to="/services">
                Explore Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-blue-400 hover:bg-primary/10 hover:border-primary px-8 py-6 rounded-full text-base font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <Reveal delay={600}>
          <div className="mt-12 flex justify-center animate-bounce hidden md:flex">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
              <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-[scroll_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
      ` }} />
    </section>
  );
};

export default Hero;