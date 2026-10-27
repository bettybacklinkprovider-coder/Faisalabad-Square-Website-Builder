import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackLabel,
  containerClassName = '',
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#131F42] to-[#1E293B] text-stone-200 p-6 text-center ${containerClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 text-[#C59B27] mb-2 opacity-90" />
        <span className="font-display text-base font-semibold tracking-wide text-white">
          {fallbackLabel || 'Faisalabad Square'}
        </span>
        <span className="text-xs text-stone-400 mt-1 max-w-xs">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
