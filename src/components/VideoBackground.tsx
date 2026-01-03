import { useEffect, useState } from 'react';

const VideoBackground = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const videos = [
    '/grok-video-2bfb7e52-27f8-4bf1-b603-ffea3cadbad9.mp4',
    '/grok-video-40fc3ab5-9b09-4c04-8147-1cb65b4f2192.mp4'
  ];

  useEffect(() => {
    const videoElement = document.getElementById(`bg-video-${currentVideo}`) as HTMLVideoElement;
    
    const handleVideoEnd = () => {
      setIsTransitioning(true);
      
      // חכה לסיום המעבר ואז החלף לסרטון הבא
      setTimeout(() => {
        const nextIndex = (currentVideo + 1) % videos.length;
        setCurrentVideo(nextIndex);
        
        // התחל את הסרטון הבא
        setTimeout(() => {
          const nextVideo = document.getElementById(`bg-video-${nextIndex}`) as HTMLVideoElement;
          if (nextVideo) {
            nextVideo.currentTime = 0;
            nextVideo.play().catch((error) => {
              console.warn('Could not play video:', error);
            });
          }
          setIsTransitioning(false);
        }, 100);
      }, 800);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // וודא שהסרטון הנוכחי מתנגן
      videoElement.play().catch((error) => {
        console.warn('Could not autoplay video:', error);
      });
      
      return () => videoElement.removeEventListener('ended', handleVideoEnd);
    }
  }, [currentVideo, videos.length]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Video overlay for subtle effect - מעט יותר שקוף כדי שהוידאו יהיה יותר בולט */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/93 via-background/88 to-background/93 z-10" />
      
      {videos.map((video, index) => (
        <video
          key={video}
          id={`bg-video-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === index && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          preload="auto"
          style={{
            filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default VideoBackground;

