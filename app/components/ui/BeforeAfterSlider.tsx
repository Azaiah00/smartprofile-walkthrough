import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    // Calculate position relative to container
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  
  useEffect(() => {
    const handleWindowMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) handleMove(e);
    };
    const handleWindowUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleWindowMove);
      window.addEventListener('touchmove', handleWindowMove);
      window.addEventListener('mouseup', handleWindowUp);
      window.addEventListener('touchend', handleWindowUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      window.removeEventListener('touchmove', handleWindowMove);
      window.removeEventListener('mouseup', handleWindowUp);
      window.removeEventListener('touchend', handleWindowUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none cursor-ew-resize group rounded-xl shadow-xl ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{ touchAction: 'none' }}
    >
        {/* After Image (Base) */}
        <img 
            src={afterImage} 
            alt={afterLabel} 
            className="block w-full h-auto object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
            {afterLabel}
        </div>

        {/* Before Image (Overlay with clip-path) */}
        <img 
            src={beforeImage} 
            alt={beforeLabel} 
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        <div 
            className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm pointer-events-none"
            style={{ opacity: sliderPosition > 10 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
            {beforeLabel}
        </div>

        {/* Slider Handle */}
        <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-luxury-black">
                <ChevronsLeftRight className="w-6 h-6" />
            </div>
        </div>
    </div>
  );
};



